const asyncHandler = require("express-async-handler");

const Teacher = require("../models/teacher.model");
const { errorMessage } = require("../middlewares/error");
const deleteImage = require("../helpers/deleteImage");

//create teacher
const createTeacher = asyncHandler(async (req, res, next) => {
  const { fullName, age, email, educationTitle, phoneNumber, address } =
    req.body;

  const teacher = await Teacher.create({
    fullName,
    age,
    email,
    educationTitle,
    image: {
      name: req.file?.filename,
      path: req.file?.path,
    },
    phoneNumber,
    address,
  });

  res.status(201).json({
    success: true,
    message: "teacher create successfully",
    teacher,
  });
});

//get all teacher
const getTeacher = asyncHandler(async (req, res, next) => {
  const teacher = await Teacher.find();

  const numberOfTeacher = teacher.length;

  res.status(201).json({
    success: true,
    numberOfTeacher,
    teacher,
  });
});

//get single teacher
const getSingleTeacher = asyncHandler(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(errorMessage(res, 400, "Teacher not found"));
  }

  res.status(201).json({
    success: true,
    teacher,
  });
});

//update teacher
const updateTeacher = asyncHandler(async (req, res, next) => {
  let teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(errorMessage(res, 400, "Teacher not found"));
  }

  teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "teacher update successfully",
    teacher,
  });
});

//delete teacher
const deleteTeacher = asyncHandler(async (req, res, next) => {
  let teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(errorMessage(res, 400, "Teacher not found"));
  }

  await deleteImage(`public/uploads/teacherPhoto/${teacher.image}`);

  teacher = await Teacher.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "teacher deleted successfully",
  });
});

module.exports = {
  createTeacher,
  getTeacher,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
};
