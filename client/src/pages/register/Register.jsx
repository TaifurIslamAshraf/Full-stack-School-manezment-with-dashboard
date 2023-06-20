import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string } from "yup";

import { useEffect } from "react";
import { useGetUserQuery } from "../../features/api/userSlice";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const { isSuccess } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      navigate("/", { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (values, formikHelpers) => {
    try {
      await axios.post("http://localhost:4000/api/register", values, {
        withCredentials: true,
      });
      formikHelpers.resetForm();
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = object().shape({
    fullName: string()
      .required("Please enter full name")
      .min(4, "Name is too short"),
    email: string().email("Invalid Email"),
    phone: string()
      .required("Please enter your phone number")
      .matches(
        /^\+?(88)?0(19|14|17|13|18|16|15)\d{8}$/,
        "Invalid phone number"
      ),
    password: string()
      .required("Please enter password")
      .min(6, "Password should be 6 character"),
  });

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
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
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email (optional)"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Field
              name="phone"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Phone"
              fullWidth
              error={Boolean(errors.phone) && Boolean(touched.phone)}
              helperText={Boolean(touched.phone) && errors.phone}
            />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
            <Link className="login-link" to={"/login"}>
              Alredy have an account ? Login
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
