const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
  },
  personalInfo: {
    fullName: {
      type: String,
      required: [true, "Please enter your fullName"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dateOfBirth: { type: String, required: true },
    nationality: { type: String },
    studentNumber: {
      type: String,
      minLength: [11, "Name should have more than 11 characters"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    address: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
  },

  parentInfo: {
    name: { type: String, required: true },
    relationship: { type: String, required: true },
    parentNumber: {
      type: String,
      required: true,
    },
  },

  admissionDetails: {
    admissionDate: { type: Date, default: Date.now },
    classApplied: { type: String, required: true },
    previousSchool: { type: String },
    admissionStatus: {
      type: String,
      enum: ["Accepted", "Pending", "Rejected"],
      default: "Pending",
    },
  },
});

const Admission = mongoose.model("Admission", studentSchema);

module.exports = Admission;
