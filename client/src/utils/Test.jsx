import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { number, object, string } from "yup";
import FormikTextField from "../components/FormsUi/TextFields";

const Test = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (values) => {
    setSubmittedData(values);
  };

  const initialValues = {
    studentId: "",
    fullName: "",
  };

  const validationSchema = object().shape({
    studentId: number().required("Please enter the birth certificate number"),
    fullName: string()
      .required("Please enter your full name")
      .min(4, "Name is too short"),
  });

  useEffect(() => {
    if (submittedData) {
      console.log("Submitted Data:", submittedData);
    }
  }, [submittedData]);

  return (
    <div className="test-container">
      <h2>Admission Form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="parsonal-info">
            <FormikTextField name="fullName" label="Full Name" />
          </div>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Form>
      </Formik>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Full Name: {submittedData.fullName}</p>
          {/* Display other form values similarly */}
        </div>
      )}
    </div>
  );
};

export default Test;
