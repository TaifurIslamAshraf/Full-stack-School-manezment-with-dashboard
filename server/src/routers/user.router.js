const router = require("express").Router();
const {
  register,
  loginUser,
  logout,
  getUsers,
  updateUserRole,
  loadUser,
} = require("../controllers/user.controller");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", loginUser);
router.get("/me", isAuthenticated, loadUser);
router.patch(
  "/user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);
router.get("/logout", logout);
router.get("/users", isAuthenticated, authorizeRoles("admin"), getUsers);

module.exports = router;
