require("dotenv").config();

const config = {
  app: {
    PORT: process.env.PORT || 4000,
    DB_URI: process.env.DB_URI || "mongodb://127.0.0.1/School-Managment",
  },
  cloudinary: {
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  jwt: {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_EXPIRE: process.env.JWT_EXPIRE,
  },
  COOKIE_EXPIRE: process.env.COOKIE_EXPIRE,
};

module.exports = config;
