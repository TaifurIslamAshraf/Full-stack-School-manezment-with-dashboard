const mongoose = require("mongoose");

const admitSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Student id is required"],
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Teacher id is required"],
    },
    fullName: {
      type: String,
      required: [true, "Student name is required"],
    },
    studentClass: {
      type: String,
      required: [true, "Student class is required"],
    },
    examYear: {
      type: Number,
      required: [true, "Exam year is required"],
    },
    semester: {
      type: String,
      required: [true, "Exam year is required"],
    },
    classRoll: {
      type: Number,
      required: [true, "Class roll is required"],
    },
    admitType: {
      type: String,
      default: "Public",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admit", admitSchema);
