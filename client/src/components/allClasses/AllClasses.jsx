// Import Swiper React components
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./allClasses.css";

// import required modules
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Autoplay, Pagination } from "swiper";
import { allClassesData } from "../../utils/data";

export default function App() {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedClass(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {allClassesData.map((item) => {
          return (
            <SwiperSlide className="class-card" key={item.classNo}>
              <div className="class-img">
                <img loading="lazy" src={item.classRoom} alt="class Room" />
              </div>
              <h3>{item.className}</h3>
              <p>{item.classTitle}</p>
              <Button
                onClick={() => handleClickOpen(item)}
                size="small"
                fullWidth
                variant="contained"
              >
                See More
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
            {selectedClass && (
              <div className="class-card-model">
                <img src={selectedClass.classRoom} alt="class room" />
                <h1>{selectedClass.className}</h1>
                <h3>{selectedClass.classTitle}</h3>
                <div className="class-features">
                  {selectedClass.classDesc.map((desc, i) => (
                    <p key={selectedClass.classNo}>
                      <span>{i + 1}</span>-{desc}
                    </p>
                  ))}
                  <Link to="/admission">
                    <Button fullWidth variant="outlined">
                      Admission Now
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
