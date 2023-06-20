const asyncHandler = require("express-async-handler");

const News = require("../models/news.model");
const { errorMessage } = require("../middlewares/error");
const deleteImage = require("../helpers/deleteImage");

//create news
const createNews = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const news = await News.create({
    title,
    description,
    image: req.file?.filename,
  });

  res.status(201).json({
    success: true,
    message: "News Created Successfully",
    news,
  });
});

//get all news
const getAllNews = asyncHandler(async (req, res, next) => {
  const news = await News.find();
  const numberOfNews = news.length;

  if (!news) {
    return next(errorMessage(res, 400, "News not found !"));
  }

  res.status(200).json({
    success: true,
    numberOfNews,
    news,
  });
});

//get single news
const getSingleNews = asyncHandler(async (req, res, next) => {
  const news = await News.findById(req.params.id);

  if (!news) {
    return next(errorMessage(res, 400, "News not found !"));
  }

  res.status(200).json({
    success: true,
    news,
  });
});

//update news
const updateNews = asyncHandler(async (req, res, next) => {
  let news = await News.findById(req.params.id);

  if (!news) {
    return next(errorMessage(res, 400, "News not found !"));
  }

  news = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "News update successfully",
    news,
  });
});

//delete news
const deleteNews = asyncHandler(async (req, res, next) => {
  let news = await News.findById(req.params.id);

  if (!news) {
    return next(errorMessage(res, 400, "News not found !"));
  }

  await deleteImage(`public/uploads/newsPhoto/${news.image}`);

  await News.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "News deleted successfully",
  });
});

module.exports = {
  createNews,
  updateNews,
  deleteNews,
  getAllNews,
  getSingleNews,
};
