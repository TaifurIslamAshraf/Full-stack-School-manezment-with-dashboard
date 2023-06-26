import { Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { number, object, string } from "yup";
import { baseUrl } from "../../utils/baseUrl";
import "./result.css";

const initialValues = {
  studentId: "",
  semester: "",
  examYear: "",
};

const validationSchema = object().shape({
  studentId: number().required("Please enter Your Student ID"),
  semester: string().required("Please enter Your semester"),
  examYear: number().required("Please enter examination Year"),
});

const Result = () => {
  const tableCell = ["Subject", "Marks", "Grade"];
  const [studentResult, setStudentResult] = useState(null);

  const handleResultSearch = async (values, formikHelpers) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/api/resultcard?studentId=${values.studentId}&semester=${values.semester}&examYear=${values.examYear}`
      );

      setStudentResult(data.studentResult?.result);
      formikHelpers.resetForm();
    } catch (error) {
      setStudentResult(null);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="result">
      <div className="result-contant">
        <h2>Search Your Result</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleResultSearch}
        >
          {({ errors, isValid, dirty, touched }) => (
            <Form>
              <Field
                name="studentId"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Student ID *"
                fullWidth
                size="small"
                error={Boolean(errors.studentId) && Boolean(touched.studentId)}
                helperText={Boolean(touched.studentId) && errors.studentId}
              />
              <div className="half-inp">
                <Field
                  name="semester"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Semester *"
                  fullWidth
                  size="small"
                  error={Boolean(errors.semester) && Boolean(touched.semester)}
                  helperText={Boolean(touched.semester) && errors.semester}
                />
                <Field
                  name="examYear"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Exam Year ID *"
                  fullWidth
                  size="small"
                  error={Boolean(errors.examYear) && Boolean(touched.examYear)}
                  helperText={Boolean(touched.examYear) && errors.examYear}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!isValid || !dirty}
              >
                Search Result
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {studentResult && (
        <div className="result-table">
          <h2>Your Result</h2>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 350 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {tableCell?.map((cell) => (
                    <TableCell key={cell}>{cell}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {studentResult?.map((row) => (
                  <TableRow
                    key={row.subject}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.subject}
                    </TableCell>
                    <TableCell align="left">{row.marks}</TableCell>
                    <TableCell align="left">{row.grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default Result;
