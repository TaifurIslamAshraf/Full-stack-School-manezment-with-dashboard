const errorMessage = (
  res,
  statusCode = 500,
  message = "Internel server error"
) => {
  res.status(statusCode);
  throw new Error(message);
};

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //mongoose not found error
  if (err.name == "CastError" && err.kind == "ObjectId") {
    statusCode = 404;
    message = "Resource Not Found";
  }

  //mongoose duplicate key error
  if (err.code === 1100) {
    statusCode = 400;
    message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  }

  //wrong jwt error
  if (err.name == "JsonWebTokenError") {
    statusCode = 400;
    message = "Json web token is invalid";
  }

  //jwt expire error
  if (err.name == "TokenExpiredError") {
    statusCode = 400;
    message = "Json web token is expired, Try again";
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorMessage, notFound, errorHandler };
