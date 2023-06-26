import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { GrClose } from "react-icons/gr";
import { useGetAllTeacherQuery } from "../../features/api/teacherSlice";

import { baseUrl } from "../../utils/baseUrl";
import { Loader } from "../Loaders/Loaders";
import "./teacher.css";

const Teacher = () => {
  const { data, isSuccess, isLoading } = useGetAllTeacherQuery();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <Button variant="contained" onClick={handleClickOpen}>
                See All Teacher
              </Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="md"
            >
              <Box textAlign="end">
                {" "}
                <Button onClick={handleClose} autoFocus>
                  <GrClose size={25} />
                </Button>
              </Box>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
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
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
};

export default Teacher;
