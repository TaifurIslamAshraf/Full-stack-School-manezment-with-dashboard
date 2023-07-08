import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { AllImages } from "../../utils/AllImages";
import MySchoolInfo from "../mySchool-info/MySchoolInfo";
import "./mySchool.css";

const MySchool = () => {
  return (
    <div className="mySchool-container">
      <div className="mySchool-info">
        <MySchoolInfo
          image={AllImages.students}
          endNum={1000}
          text="Students"
        />
        <MySchoolInfo image={AllImages.teacher} endNum={20} text="Teacher" />
        <MySchoolInfo
          image={AllImages.studentAPluse}
          endNum={600}
          text="A+ Students"
        />
      </div>
      <h3>
        Emotional and social development of students through introduction to our
        school Always eager to do. From the link below for school admission Fill
        the form and details about school contact and facilities Always contact
        us to know.
      </h3>

      <Box textAlign="end">
        <Link to="/admission">
          <Button variant="contained" size="large">
            Admission Now
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default MySchool;
