import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useGetAllTeacherQuery } from "../../features/api/teacherSlice";

import Modal from "react-responsive-modal";
import { baseUrl } from "../../utils/baseUrl";
import { Loader } from "../Loaders/Loaders";
import "./teacher.css";

const Teacher = () => {
  const { data, isSuccess, isLoading } = useGetAllTeacherQuery();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="teacher-contant">
          <h1>Our teachers</h1>
          <Marquee
            direction="left"
            autoFill
            gradient
            pauseOnHover
            speed={80}
            gradientWidth={40}
            gradientColor={[249, 245, 246, 0.5]}
          >
            {isSuccess &&
              data.teacher.map((item) => {
                return (
                  <div key={item._id} className="teacher-card">
                    <img
                      loading="lazy"
                      src={`${baseUrl}/teacherPhoto/${item.image.name}`}
                      alt={item.image.name}
                    />
                    <div className="teacher-info">
                      <h4>{item.fullName}</h4>
                      <p>{item.educationTitle}</p>
                      <p>{item.phoneNumber}</p>
                    </div>
                  </div>
                );
              })}
          </Marquee>
          <div>
            <Box textAlign="center" marginTop={5}>
              <Button
                size="large"
                variant="contained"
                onClick={handleClickOpen}
              >
                See All Teacher
              </Button>
            </Box>
            <Modal open={open} onClose={() => setOpen(false)} center>
              <div className="teacher-card-model">
                {isSuccess &&
                  data.teacher.map((item) => {
                    return (
                      <div key={item._id} className="teacher-card">
                        <img
                          loading="lazy"
                          src={`${baseUrl}/teacherPhoto/${item.image.name}`}
                          alt={item.image.name}
                        />
                        <div className="teacher-info">
                          <h4>{item.fullName}</h4>
                          <p>{item.educationTitle}</p>
                          <p>{item.phoneNumber}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default Teacher;
