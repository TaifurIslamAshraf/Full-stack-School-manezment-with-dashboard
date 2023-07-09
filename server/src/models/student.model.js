const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    image: {
      required: true,
      type: String,
    },
    grade: {
      type: String,
      required: true,
    },
    studentClass: {
      type: String,
      required: true,
    },
    examYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
