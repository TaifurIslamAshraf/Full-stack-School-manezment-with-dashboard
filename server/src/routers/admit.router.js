const router = require("express").Router();
const {
  createAdmit,
  getSingleAdmit,
  getAllAdmit,
  updateAdmit,
  deleteAdmit,
} = require("../controllers/admit.controller");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");

router.post(
  "/admit",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  createAdmit
);
router.post("/admit/single", getSingleAdmit);
router.get(
  "/admit",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  getAllAdmit
);
router.put(
  "/admit/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  updateAdmit
);
router.delete(
  "/admit/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  deleteAdmit
);

module.exports = router;
