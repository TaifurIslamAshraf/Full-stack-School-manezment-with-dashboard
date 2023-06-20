const mongoose = require("mongoose");
const validator = require("validator");

const teacherSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Minimum age is 18"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      validate: [validator.isEmail, ["Please enter a valid email"]],
    },
    subjects: [{ type: String, required: true }],
    image: {
      type: String,
      required: true,
    },

    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
