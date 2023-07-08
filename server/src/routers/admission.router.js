const express = require("express");
const router = express.Router();

const { fileUploder } = require("../middlewares/multer");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const upload = fileUploder("public/uploads/admissionReqStudent");

const {
  createAdmission,
  deleteAdmission,
  getAdmission,
  updateAdmission,
  getSingleAdmission,
} = require("../controllers/admission.controller");

router.post("/admission", upload.single("image"), createAdmission);
router.get(
  "/admission",
  isAuthenticated,
  authorizeRoles("admin"),
  getAdmission
);
router.delete(
  "/admission/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteAdmission
);
router.put(
  "/admission/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateAdmission
);
router.get(
  "/admission/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  getSingleAdmission
);

module.exports = router;
