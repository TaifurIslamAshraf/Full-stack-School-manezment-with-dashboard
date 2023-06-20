const express = require("express");
const router = express.Router();

const {
  createNews,
  updateNews,
  getAllNews,
  getSingleNews,
  deleteNews,
} = require("../controllers/news.controller");
const { fileUploder } = require("../middlewares/multer");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const upload = fileUploder("public/uploads/newsPhoto");

router.post(
  "/news",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  upload.single("image"),
  createNews
);
router.get("/news", getAllNews);
router.get("/news/:id", getSingleNews);
router.put(
  "/news/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  updateNews
);
router.delete(
  "/news/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  deleteNews
);

module.exports = router;
