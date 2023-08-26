import { Box, Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Modal } from "react-responsive-modal";

import { useGetGpaStudentQuery } from "../../features/api/gpaStudentSlice";

import { useState } from "react";
import "react-responsive-modal/styles.css";
import { baseUrl } from "../../utils/baseUrl";
import "./GpaStudents.css";

const GpaStudentData = () => {
  const [open, setOpen] = useState(false);
  const { data, isSuccess } = useGetGpaStudentQuery();
  return (
    <>
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
          data.student?.map((item) => {
            return (
              <div key={item._id} className="gpa-info">
                <img
                  src={`${baseUrl}/gpaStudentPhoto/${item.image}`}
                  loading="lazy"
                  alt="gpa student"
                />
                <div className="gpa-text-info">
                  <h4>{item.fullName}</h4>
                  <p>GPA: 5.00</p>
                </div>
              </div>
            );
          })}
      </Marquee>
      <div className="gpa-model">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          classNames={{ modal: "customModal" }}
        >
          <div className="gpa-modal-card">
            {isSuccess &&
              data.student?.map((item) => {
                return (
                  <div key={item._id} className="gpa-info">
                    <img
                      src={`${baseUrl}/gpaStudentPhoto/${item.image}`}
                      loading="lazy"
                      alt="gpa student"
                    />
                    <div className="gpa-text-info">
                      <h4>{item.fullName}</h4>
                      <p>GPA: 5.00</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Modal>
        <Box textAlign="center" marginTop={5}>
          <Button
            size="large"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            See All Student
          </Button>
        </Box>
      </div>
    </>
  );
};

export default GpaStudentData;
