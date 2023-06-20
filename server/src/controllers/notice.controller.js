const asyncHandler = require("express-async-handler");

const Notice = require("../models/notice.model");
const { errorMessage } = require("../middlewares/error");
const deleteImage = require("../helpers/deleteImage");

//create notice
const createNotice = asyncHandler(async (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const notice = await Notice.create({
    title,
    image: req.file?.filename,
  });

  res.status(201).json({
    success: true,
    message: "Notice Created Successfully",
    notice,
  });
});

//get all notice
const getAllNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.find();
  const numberOfNotice = notice.length;

  if (!notice) {
    return next(errorMessage(res, 400, "notice not found !"));
  }

  res.status(200).json({
    success: true,
    numberOfNotice,
    notice,
  });
});

//get single notice
const getSingleNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);

  if (!notice) {
    return next(errorMessage(res, 400, "Notice not found !"));
  }

  res.status(200).json({
    success: true,
    notice,
  });
});

//update notice
const updateNotice = asyncHandler(async (req, res, next) => {
  let notice = await Notice.findById(req.params.id);

  if (!notice) {
    return next(errorMessage(res, 400, "notice not found !"));
  }

  notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "notice update successfully",
    notice,
  });
});

//delete notice
const deleteNotice = asyncHandler(async (req, res, next) => {
  let notice = await Notice.findById(req.params.id);

  if (!notice) {
    return next(errorMessage(res, 400, "notice not found !"));
  }

  await deleteImage(`public/uploads/noticePhoto/${notice.image}`);

  await Notice.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Notice deleted successfully",
  });
});

module.exports = {
  createNotice,
  getAllNotice,
  getSingleNotice,
  updateNotice,
  deleteNotice,
};
