const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");
const { fileUploder } = require("../middlewares/multer");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const upload = fileUploder("public/uploads/eventsPhoto");

router.post(
  "/event",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  upload.single("image"),
  createEvent
);
router.get("/event", getAllEvents);
router.get("/event/:id", getSingleEvent);
router.put(
  "/event/:id",
  isAuthenticated,
  authorizeRoles("admin", "teacher"),
  upload.single("image"),
  updateEvent
);
router.delete(
  "/event/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteEvent
);

module.exports = router;
