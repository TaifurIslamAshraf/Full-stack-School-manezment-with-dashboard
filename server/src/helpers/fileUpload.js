const fileUpload = require("express-fileupload");

const imageUpload = (uploadPath) => {
  fileUpload.mv(uploadPath, (error) => {
    if (error) {
      return next(errorMessage(res, 500, "Failed to upload image"));
    }
  });
};

module.exports = { imageUpload };
