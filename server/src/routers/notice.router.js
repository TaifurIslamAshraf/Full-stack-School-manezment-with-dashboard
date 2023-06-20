const express = require("express");
const router = express.Router();

const {
  createNotice,
  deleteNotice,
  getAllNotice,
  getSingleNotice,
  updateNotice,
} = require("../controllers/notice.controller");
const { fileUploder } = require("../middlewares/multer");
const { authorizeRoles, isAuthenticated } = require("../middlewares/auth");

const upload = fileUploder("public/uploads/noticePhoto");

router.post(
  "/notice",
  isAuthenticated,
  authorizeRoles("admin"),
  upload.single("image"),
  createNotice
);
router.get("/notice", getAllNotice);
router.get("/notice/:id", getSingleNotice);
router.put(
  "/notice/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotice
);
router.delete(
  "/notice/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteNotice
);

module.exports = router;
