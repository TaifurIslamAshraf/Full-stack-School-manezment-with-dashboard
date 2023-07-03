import { TextField } from "@mui/material";
import { useField } from "formik";

// eslint-disable-next-line react/prop-types
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      label={label}
      {...field}
      {...props}
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? meta.error : meta.error}
    />
  );
};

export default TextInput;
