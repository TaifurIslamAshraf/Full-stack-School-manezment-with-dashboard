import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
    console.log(e.target.value);
  };
  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (mata && mata.touched && mata.error) {
    configSelect.error = true;
    configSelect.helperText = mata.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, posi) => {
        return (
          <MenuItem key={posi} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

SelectWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default SelectWrapper;
