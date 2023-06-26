const asyncHandler = require("express-async-handler");

const Admission = require("../models/admission.model");
const { errorMessage } = require("../middlewares/error");

//create admission
const createAdmission = asyncHandler(async (req, res, next) => {
  const {
    studentId,
    fullName,
    gender,
    dateOfBirth,
    nationality,
    studentNumber,
    email,
    address,
    name,
    relationship,
    parentNumber,
    classApplied,
    previousSchool,
  } = req.body;

  const studentData = {
    studentId,
    personalInfo: {
      fullName,
      gender,
      dateOfBirth,
      nationality,
      studentNumber,
      email,
      address,
      studentImg: req.files.studentImg[0].filename,
    },
    parentInfo: {
      name,
      relationship,
      parentNumber,
    },
    admissionDetails: {
      classApplied,
      previousSchool,
    },
  };

  const admissionExists = await Admission.exists({ studentId });
  if (admissionExists) {
    return next(errorMessage(res, 400, "You Alredy Apply For Admission"));
  }

  const applyedAdmission = await Admission.create(studentData);

  res.status(201).json({
    success: true,
    message: "apply for admission successfully",
    applyedAdmission,
  });
});

//get admission
const getAdmission = asyncHandler(async (req, res, next) => {
  const allApplyedStudent = await Admission.find();
  const numberOfApplyed = allApplyedStudent.length;

  res.status(201).json({
    success: true,
    message: "apply for admission successfully",
    numberOfApplyed,
    allApplyedStudent,
  });
});

//get single admission
const getSingleAdmission = asyncHandler(async (req, res, next) => {
  const student = await Admission.findById(req.params.id);

  if (!student) {
    return next(errorMessage(res, 200, "Student not found"));
  }

  res.status(201).json({
    success: true,
    student,
  });
});

//delete admission
const deleteAdmission = asyncHandler(async (req, res, next) => {
  const admissionReq = await Admission.findById(req.params.id);

  if (!admissionReq) {
    return next(errorMessage(res, 400, "Not found admission request"));
  }

  await Admission.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "admission deleted successfully",
  });
});

//update admission
const updateAdmission = asyncHandler(async (req, res, next) => {
  let admissionReq = await Admission.findById(req.params.id);

  if (!admissionReq) {
    return next(errorMessage(res, 400, "Not found admission request"));
  }

  admissionReq = await Admission.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "admission updated successfully",
    admissionReq,
  });
});

module.exports = {
  createAdmission,
  getAdmission,
  deleteAdmission,
  updateAdmission,
  getSingleAdmission,
};
