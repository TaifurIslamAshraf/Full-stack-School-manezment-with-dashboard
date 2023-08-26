import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { AllImages } from "../../utils/AllImages";

import "swiper/css";
import "swiper/css/navigation";
import "./director.css";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="directorSwiper"
      >
        <SwiperSlide>
          <div className="director-heading">
            <h1>Director</h1>
          </div>
          <div className="director-containt">
            <div className="dir-img">
              <img src={AllImages.directorTeacher} alt="director" />
            </div>
            <div className="line"></div>
            <div className="directorText">
              <p>
                Changing world conditions have affected every aspect of change.
                Qualitative changes have come in our education system. Advances
                in information technology have brought a vast wealth of
                knowledge within reach today. Modern education is moving forward
                with conviction to make educated and complete human beings.{" "}
                <br /> Changing world conditions have affected every aspect of
                change. Qualitative changes have come in our education system.
                Advances in information technology have brought a vast wealth of
                knowledge within reach today. Modern education is moving forward
                with conviction to make educated and complete human beings
              </p>
              <div className="dir-detail">
                <h2>Saiful Islam</h2>
                <h3>B.A Honours Arabic</h3>
                <p>Director of Gobindapur S.A.M</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="director-heading">
            <h1>Executive Director</h1>
          </div>
          <div className="director-containt">
            <div className="dir-img">
              <img src={AllImages.subDirector} alt="director" />
            </div>
            <div className="line"></div>
            <div className="directorText">
              <p>
                Changing world conditions have affected every aspect of change.
                Qualitative changes have come in our education system. Advances
                in information technology have brought a vast wealth of
                knowledge within reach today. Modern education is moving forward
                with conviction to make educated and complete human beings.{" "}
                <br /> Changing world conditions have affected every aspect of
                change. Qualitative changes have come in our education system.
                Advances in information technology have brought a vast wealth of
                knowledge within reach today. Modern education is moving forward
                with conviction to make educated and complete human beings
              </p>
              <div className="dir-detail">
                <h2>Hasan Mahmud</h2>
                <h3>B.A Honours Bangla</h3>
                <p>Executive Director of Gobindapur S.A.M</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
