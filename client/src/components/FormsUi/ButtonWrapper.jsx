import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

const ButtonWrapper = ({ children, color, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig = {
    variant: "contained",
    color: color || "primary",
    fullWidth: true,
    onClick: handleSubmit,
    ...otherProps,
  };

  return <Button {...buttonConfig}>{children}</Button>;
};

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default ButtonWrapper;
