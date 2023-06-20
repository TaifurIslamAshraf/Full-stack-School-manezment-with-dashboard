const asyncHandler = require("express-async-handler");

const Admit = require("../models/admit.model");
const { errorMessage } = require("../middlewares/error");
const Admission = require("../models/admission.model");

//create admit
const createAdmit = asyncHandler(async (req, res, next) => {
  req.body.teacher = req.user._id;

  const { studentId, studentClass, examYear, semester, classRoll } = req.body;

  if ((!studentId, !studentClass, !examYear, !semester, !classRoll)) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const studentInfo = await Admission.findOne({ studentId: studentId });

  if (!studentInfo) {
    return next(errorMessage(res, 400, "Please enter a valid student id"));
  }
  req.body.fullName = studentInfo.personalInfo.fullName;

  const admit = await Admit.create(req.body);

  res.status(201).json({
    success: true,
    message: "Student admit created successfully",
    admit,
  });
});

//get all admit
const getAllAdmit = asyncHandler(async (req, res, next) => {
  const admit = await Admit.find();

  res.status(201).json({
    success: true,
    admit,
  });
});

//get single admit
const getSingleAdmit = asyncHandler(async (req, res, next) => {
  const { studentId, studentClass, examYear, semester } = req.body;

  if ((!studentId, !studentClass, !examYear, !semester)) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const filter = {
    studentId: studentId,
    studentClass: studentClass,
    examYear: examYear,
    semester: semester,
  };

  const admit = await Admit.findOne(filter);

  if (!admit) {
    return next(errorMessage(res, 400, "Please enter valid info"));
  }

  if (admit.admitType != "Public") {
    return res.status(405).json({
      message: "Please contact your school for admit",
    });
  }

  res.status(200).json({
    success: true,
    admit,
  });
});

//update admit
const updateAdmit = asyncHandler(async (req, res, next) => {
  let admit = await Admit.findById(req.params.id);

  if (!admit) {
    return next(errorMessage(res, 200, "admit not found"));
  }

  admit = await Admit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "admit updated successfully",
    admit,
  });
});

//delete admit
const deleteAdmit = asyncHandler(async (req, res, next) => {
  const admit = await Admit.findById(req.params.id);

  if (!admit) {
    return next(errorMessage(res, 200, "admit not found"));
  }

  await Admit.findByIdAndDelete(req.params.id);

  res.status(201).json({
    success: true,
    message: "admit delete successfully",
  });
});

module.exports = {
  createAdmit,
  getAllAdmit,
  updateAdmit,
  getSingleAdmit,
  deleteAdmit,
};
