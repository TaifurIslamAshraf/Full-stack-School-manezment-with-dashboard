const express = require("express");
const router = express.Router();

const { fileUploder } = require("../middlewares/multer");
const { authorizeRoles, isAuthenticated } = require("../middlewares/auth");
const {
  createTeacher,
  getTeacher,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const upload = fileUploder("public/uploads/teacherPhoto");

router.post(
  "/teacher",
  isAuthenticated,
  authorizeRoles("admin"),
  upload.single("image"),
  createTeacher
);

router.get("/teacher", getTeacher);
router.get(
  "/teacher/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  getSingleTeacher
);
router.put(
  "/teacher/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateTeacher
);
router.delete(
  "/teacher/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteTeacher
);

module.exports = router;
