const express = require("express");
const {
  getAllStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const { fileUploder } = require("../middlewares/multer");
const router = express.Router();

const upload = fileUploder("public/uploads/gpaStudentPhoto");

router.get("/gpastudent", getAllStudent);
router.post(
  "/gpastudent",
  isAuthenticated,
  authorizeRoles("admin"),
  upload.single("image"),
  createStudent
);
router.put("/gpastudent/:id", updateStudent);
router.delete("/gpastudent/:id", deleteStudent);

module.exports = router;
