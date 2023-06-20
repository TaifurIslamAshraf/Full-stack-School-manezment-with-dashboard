const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { errorMessage } = require("../middlewares/error");
const config = require("../config/config");

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(errorMessage(res, 401, "Please login to access this resource"));
  }

  try {
    const decodedData = jwt.verify(token, config.jwt.JWT_SECRET_KEY);
    req.user = await User.findOne({ _id: decodedData._id });
    next();
  } catch (error) {
    return next(errorMessage(res, 403, "Invalid token"));
  }
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return next(
          errorMessage(
            res,
            403,
            `Role: ${req.user.role} is not allowed to access this resource`
          )
        );
      }
      next();
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

module.exports = { isAuthenticated, authorizeRoles };
