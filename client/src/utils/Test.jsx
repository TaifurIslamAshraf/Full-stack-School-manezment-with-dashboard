import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/FormsUi/TextFields";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // Add more validation rules for other fields
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        // Add more fields here
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <TextInput name="email" label="Email" />
        {/* Add more input fields */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
