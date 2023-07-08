import { Button, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { date, number, object, string } from "yup";

import { useEffect, useState } from "react";
import { useAddAdmissionMutation } from "../../features/api/admissionSlice";
import { allClasses, genderData } from "../../utils/data";
import "./admission.css";

const Admission = () => {
  const [image, setImage] = useState(null);
  const [addAdmission, { isLoading, isSuccess, isError, error, reset }] =
    useAddAdmissionMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate("/success/admission", { replace: true });
      setImage(null);
    } else if (isError) {
      toast.error(error.data.message);
    }
  }, [isSuccess, isError, error, reset, navigate]);

  const handleSubmit = async (values, formikHelpers) => {
    const formData = new FormData();
    formData.append("image", image);

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    addAdmission(formData);
    formikHelpers.resetForm();
  };

  const initialValues = {
    studentId: "",
    fullName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    studentNumber: "",
    email: "",
    address: "",
    // studentImg: null,
    // birthCertificate: null,
    name: "",
    relationship: "",
    parentNumber: "",
    previousSchool: "",
    classApplied: "",
  };

  const validationSchema = object().shape({
    studentId: number().required("please enter birth certificate number"),
    fullName: string()
      .required("Please enter your fullName")
      .min(4, "Name too short"),
    gender: string().required("Select your gender"),
    dateOfBirth: date().required("Enter your birthday"),
    nationality: string(),
    studentNumber: string().matches(
      /^\+?(88)?0(19|14|17|13|18|16|15)\d{8}$/,
      "Invalid phone number"
    ),
    email: string().email("Invalid Email"),
    address: string().required("Enter your Address"),
    // studentImg: mixed().required("Choose Your image"),
    // birthCertificate: mixed().required("Choose Your birth certificate"),
    name: string()
      .required("Please enter your fullName")
      .min(4, "Name too short"),
    relationship: string().required("Enter your guardian reletionship"),
    parentNumber: string()
      .required("enter guardian phone number")
      .matches(
        /^\+?(88)?0(19|14|17|13|18|16|15)\d{8}$/,
        "Invalid phone number"
      ),
    previousSchool: string(),
    classApplied: string().required("Select Your Applied Class"),
  });

  const textConfig = {
    InputLabelProps: {
      shrink: true,
    },
  };

  return (
    <div className="admission-container">
      <h1>Admission Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="admission-form">
              <div className="parsonal-info">
                <h4>Parsonal Details</h4>
                <Field
                  name="fullName"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Full Name"
                  fullWidth
                  error={Boolean(errors.fullName) && Boolean(touched.fullName)}
                  helperText={Boolean(touched.fullName) && errors.fullName}
                />

                <div className="half-inp">
                  <Field
                    name="gender"
                    select
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Gender"
                    fullWidth
                    error={Boolean(errors.gender) && Boolean(touched.gender)}
                    helperText={Boolean(touched.gender) && errors.gender}
                  >
                    {Object.keys(genderData).map((item, posi) => {
                      return (
                        <MenuItem key={posi} value={item}>
                          {genderData[item]}
                        </MenuItem>
                      );
                    })}
                  </Field>

                  <Field
                    name="dateOfBirth"
                    type="date"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Date Of Birth"
                    fullWidth
                    {...textConfig}
                    error={
                      Boolean(errors.dateOfBirth) &&
                      Boolean(touched.dateOfBirth)
                    }
                    helperText={
                      Boolean(touched.dateOfBirth) && errors.dateOfBirth
                    }
                  />
                </div>

                <Field
                  name="nationality"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Nationality"
                  fullWidth
                  error={
                    Boolean(errors.nationality) && Boolean(touched.nationality)
                  }
                  helperText={
                    Boolean(touched.nationality) && errors.nationality
                  }
                />
                <Field
                  name="studentId"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="birth certificate no"
                  fullWidth
                  error={
                    Boolean(errors.studentId) && Boolean(touched.studentId)
                  }
                  helperText={Boolean(touched.studentId) && errors.studentId}
                />
                <Field
                  name="studentNumber"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Phone"
                  fullWidth
                  error={
                    Boolean(errors.studentNumber) &&
                    Boolean(touched.studentNumber)
                  }
                  helperText={
                    Boolean(touched.studentNumber) && errors.studentNumber
                  }
                />
                <div className="half-inp">
                  <Field
                    name="email"
                    type="email"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Email"
                    fullWidth
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                  />
                  <Field
                    name="address"
                    type="text"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Address"
                    fullWidth
                    error={Boolean(errors.address) && Boolean(touched.address)}
                    helperText={Boolean(touched.address) && errors.address}
                  />
                </div>
                <div className="file-inp">
                  <label htmlFor="studentImg">Student Image</label>
                  <input
                    type="file"
                    name="image"
                    required
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="parants-info">
                <h4>Parants Details</h4>
                <Field
                  name="name"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Full Name"
                  fullWidth
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                />
                <Field
                  name="relationship"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Relation"
                  fullWidth
                  error={
                    Boolean(errors.relationship) &&
                    Boolean(touched.relationship)
                  }
                  helperText={
                    Boolean(touched.relationship) && errors.relationship
                  }
                />
                <Field
                  name="parentNumber"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Phone"
                  fullWidth
                  error={
                    Boolean(errors.parentNumber) &&
                    Boolean(touched.parentNumber)
                  }
                  helperText={
                    Boolean(touched.parentNumber) && errors.parentNumber
                  }
                />
              </div>
              <div className="parsonal-info">
                <h4>Admission Details</h4>
                <div className="half-inp">
                  <Field
                    name="previousSchool"
                    type="text"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Previous School"
                    fullWidth
                    error={
                      Boolean(errors.previousSchool) &&
                      Boolean(touched.previousSchool)
                    }
                    helperText={
                      Boolean(touched.previousSchool) && errors.previousSchool
                    }
                  />
                  <Field
                    name="classApplied"
                    select
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Select Class"
                    fullWidth
                    error={
                      Boolean(errors.classApplied) &&
                      Boolean(touched.classApplied)
                    }
                    helperText={
                      Boolean(touched.classApplied) && errors.classApplied
                    }
                  >
                    {Object.keys(allClasses).map((item, posi) => {
                      return (
                        <MenuItem key={posi} value={item}>
                          {allClasses[item]}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </div>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {isLoading ? "Loding..." : "Apply"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Admission;
