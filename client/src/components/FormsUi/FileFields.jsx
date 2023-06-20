import { InputLabel, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

const FileFields = ({ name, accept, label, ...otherProps }) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.files[0]);
  };

  const configFileField = {
    ...field,
    ...otherProps,
    type: "file",
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
    inputProps: {
      accept: accept,
    },
  };

  if (mata && mata.error && mata.touched) {
    configFileField.error = true;
    configFileField.helperText = mata.error;
  }
  return (
    <>
      <InputLabel htmlFor="file">{label}:</InputLabel>
      <TextField {...configFileField} />
    </>
  );
};

FileFields.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default FileFields;
