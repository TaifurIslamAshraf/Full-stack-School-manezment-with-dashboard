const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(config.app.DB_URI)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
