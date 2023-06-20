import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string } from "yup";

import { useEffect } from "react";
import { useGetUserQuery } from "../../features/api/userSlice";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const { isSuccess } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      navigate("/", { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (values, formikHelpers) => {
    try {
      await axios.post("http://localhost:4000/api/login", values, {
        withCredentials: true,
      });
      formikHelpers.resetForm();
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const initialValues = {
    phone: "",
    password: "",
  };

  const validationSchema = object().shape({
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
      <h2>Login Your Account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
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
              Login
            </Button>

            <Link className="register-link" to={"/register"}>
              Don&apos;t have an account ? Register
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
