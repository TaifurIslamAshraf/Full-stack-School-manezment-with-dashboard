import PropTypes from "prop-types";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/userSlice";

export const Authorizes = ({ Cmp }) => {
  const navigate = useNavigate();
  const { isSuccess, data } = useGetUserQuery();

  useEffect(() => {
    if (!isSuccess) {
      navigate("/login", { replace: true });
    } else if (data && data.user.role !== "admin") {
      toast.info("Only Admin can access this page", {
        toastId: "111",
      });
      navigate("/", { replace: true });
      console.log("first");
    }
  }, [data, isSuccess, navigate]);

  return (
    <>
      <Cmp />
    </>
  );
};

Authorizes.propTypes = {
  Cmp: PropTypes.elementType.isRequired,
};

export const AllAuthorizes = ({ Cmp }) => {
  const navigate = useNavigate();
  const { isSuccess, data } = useGetUserQuery();

  useEffect(() => {
    if (!isSuccess) {
      navigate("/login", { replace: true });
    } else if (
      data &&
      data.user.role !== "admin" &&
      data &&
      data.user.role !== "teacher"
    ) {
      toast.info("Admin and Teacher can access", {
        toastId: "222",
      });
      navigate("/", { replace: true });
    }
  }, [data, isSuccess, navigate]);

  return (
    <>
      <Cmp />
    </>
  );
};

AllAuthorizes.propTypes = {
  Cmp: PropTypes.elementType.isRequired,
};
