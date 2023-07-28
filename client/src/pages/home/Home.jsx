import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import { BiMessageDetail } from "react-icons/bi";
import "./home.css";

import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/img-hero.png";
import { FullLoader } from "../../components/Loaders/Loaders";
import AllClasses from "../../components/allClasses/AllClasses";
import Cards from "../../components/cards/Cards";
import Director from "../../components/director/Director";
import GpaStudents from "../../components/gpaStudents/GpaStudents";
import MySchool from "../../components/mySchool/MySchool";
import Teacher from "../../components/teacher/Teacher";
import { useGetNoticeQuery } from "../../features/api/noticeSlice";

const Home = () => {
  const { isLoading, isSuccess, data } = useGetNoticeQuery();

  return (
    <>
      {isLoading ? (
        <FullLoader />
      ) : (
        <div className="home-container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  <span>Gobindapur</span> S.A.M
                </h1>
                <p>
                  The direction of progress is committed to education, ensuring
                  that the path of enlightenment always remains illuminated.
                  Therefore, we are advancing on the bright path of education,
                  moving forward with a complete dedication to providing a
                  preparedness for all-encompassing education that is reliable
                  and trustworthy.
                </p>
                <Link to={"/admission"}>
                  {" "}
                  <Button className="hero-btn">Apply Admission</Button>
                </Link>
              </div>
              <div className="hero-img">
                <img src={HeroImg} alt="hero img" />
              </div>
            </div>

            <div className="hero-notice">
              <Marquee
                direction="left"
                autoFill
                gradient
                pauseOnHover
                speed={80}
                gradientWidth={60}
                gradientColor={[138, 43, 226]}
              >
                {isSuccess &&
                  data.notice.map((item) => {
                    return <h3 key={item._id}>{item.title} | </h3>;
                  })}
              </Marquee>
            </div>
          </div>

          <div className="school-info">
            <h1>
              Facilities of a <span>School</span> at a Glance
            </h1>
            <div className="cards">
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
              <Cards
                icon={<BiMessageDetail size={40} color="blueviolet" />}
                title="Missing message will be sent"
                desc="If the student does not come to school, they will be contacted
                  by sending absent messages."
              />
            </div>
          </div>

          <div className="teacher-info">
            <Teacher />
          </div>

          <div className="all-class">
            <h1>
              School <span>Class</span> Rooms
            </h1>
            <h4>Everything from play to intermediate.</h4>
            <AllClasses />
          </div>

          <div className="my-school">
            <MySchool />
          </div>

          <div className="gpa-student">
            <GpaStudents />
          </div>

          <div className="director-section">
            <Director />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
