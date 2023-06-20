import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetUserQuery } from "../../features/api/userSlice";

const Protected = ({ Cmp }) => {
  const navigate = useNavigate();
  const { isSuccess } = useGetUserQuery();

  useEffect(() => {
    if (!isSuccess) {
      navigate("/login", { replace: true });
    }
  }, [isSuccess, navigate]);
  return (
    <>
      <Cmp />
    </>
  );
};

Protected.propTypes = {
  Cmp: PropTypes.elementType.isRequired,
};

export default Protected;
