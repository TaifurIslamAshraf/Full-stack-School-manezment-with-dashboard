const asyncHandler = require("express-async-handler");

const Student = require("../models/student.model");
const { errorMessage } = require("../middlewares/error");

//create student gpa
const createStudent = asyncHandler(async (req, res, next) => {
  const { examYear, grade, studentClass, fullName } = req.body;

  if ((!examYear, !grade, !studentClass, !fullName)) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const student = await Student.create({
    examYear,
    teacher: req.user._id,
    grade,
    image: req.file?.filename,
    studentClass,
    fullName,
  });

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    student,
  });
});

//get student gpa
const getAllStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.find();

  res.status(200).json({
    success: true,
    student,
  });
});

//update student gpa
const updateStudent = asyncHandler(async (req, res, next) => {
  let student = await Student.findById(req.params.id);

  if (!student) {
    return next(errorMessage(res, 400, "Student not found"));
  }

  student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    student,
  });
});

//delete student gpa
const deleteStudent = asyncHandler(async (req, res, next) => {
  let student = await Student.findById(req.params.id);

  if (!student) {
    return next(errorMessage(res, 400, "Student not found"));
  }

  await Student.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
  });
});

module.exports = { createStudent, deleteStudent, updateStudent, getAllStudent };
