import { TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

const DateTimePicker = ({ name, ...otherprops }) => {
  const [field, mata] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherprops,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (mata && mata.touched && mata.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = mata.error;
  }

  return <TextField {...configDateTimePicker} />;
};

DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DateTimePicker;
