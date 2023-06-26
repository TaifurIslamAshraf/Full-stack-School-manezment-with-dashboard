const express = require("express");
const router = express.Router();

const {
  createResult,
  getAllResult,
  searchResult,
  updateResult,
} = require("../controllers/result.controller");
const { authorizeRoles, isAuthenticated } = require("../middlewares/auth");

router.post(
  "/result",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  createResult
);
router.put(
  "/result/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  updateResult
);
router.get(
  "/result",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  getAllResult
);
router.get("/resultcard", searchResult);

module.exports = router;
