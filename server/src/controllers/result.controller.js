const asyncHandler = require("express-async-handler");

const Result = require("../models/result.model");
const Admission = require("../models/admission.model");
const { errorMessage } = require("../middlewares/error");
const calculateGPA = require("../helpers/gpaCalculetor");

//create result --- teacher/Admin
const createResult = asyncHandler(async (req, res, next) => {
  req.body.teacher = req.user._id;
  req.body.grade = calculateGPA(req.body.marks);

  const result = await Result.create(req.body);

  res.status(201).json({
    success: true,
    message: "Result created successfully",
    result,
  });
});

//get all result --admin
const getAllResult = asyncHandler(async (req, res, next) => {
  // const searchQuery = req.query.result || "";
  const page = req.query.page || 1;
  const limit = Number(req.query.limit) || 10;

  // const searchRegExp = RegExp(".*" + searchQuery + ".*", "i");

  // const filter = {
  //   $or: [
  //     { name: { $regex: searchRegExp } },
  //     { email: { $regex: searchRegExp } },
  //     { phone: { $regex: searchRegExp } },
  //   ],
  // };

  const result = await Result.find()
    .limit(limit)
    .skip((page - 1) * limit);

  const numberOfResult = await Result.find().countDocuments();

  res.status(200).json({
    success: true,
    pagination: {
      totalPage: Math.ceil(numberOfResult / limit),
      currentPage: page,
    },
    result,
  });
});

//update result
const updateResult = asyncHandler(async (req, res, next) => {
  let result = await Result.findById(req.params.id);

  if (!result) {
    return next(errorMessage(res, 400, "Result recod not found"));
  }

  result = await Result.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Result update successfully",
    result,
  });
});

//search result -- student
const searchResult = asyncHandler(async (req, res, next) => {
  const { studentId, semester, examYear } = req.body;

  const result = await Result.find({ studentId, semester, examYear });

  if (result.length === 0) {
    res.status(400).json({
      success: false,
      message: "Your Result Not found. Please enter valid information",
    });
  }

  res.status(200).json({
    success: true,
    studentResult: result,
  });
});

module.exports = { createResult, getAllResult, searchResult, updateResult };
