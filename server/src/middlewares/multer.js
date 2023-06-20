const multer = require("multer");

const fileUploder = (destination) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      const name = Date.now() + "-" + file.originalname;
      cb(null, name);
    },
  });

  return multer({ storage: storage });
};

module.exports = { fileUploder };
