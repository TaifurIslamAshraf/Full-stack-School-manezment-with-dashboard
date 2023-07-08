const asyncHandler = require("express-async-handler");
const fs = require("fs").promises;
const { Server } = require("socket.io");

const httpServer = require("../../socket");
const Event = require("../models/event.model");
const Notification = require("../models/notification.model");
const { errorMessage } = require("../middlewares/error");
const { deleteImage, extraImgDelete } = require("../helpers/deleteImage");

//create event
const createEvent = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next(errorMessage(res, 400, "All field are required"));
  }

  const event = await Event.create({
    title,
    description,
    image: req.file?.filename,
  });

  const allEvent = await Event.find();
  await extraImgDelete(allEvent, "public/uploads/eventsPhoto");

  // const notification = await Notification.create({
  //   message: "Publish new event",
  // });

  // // Emit the event notification
  // const io = new Server(httpServer);
  // io.emit("eventNotification", "Publish new event");

  res.status(201).json({
    success: true,
    message: "Event Created Successfully",
    event,
  });
});

//get all events
const getAllEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find();
  const numberOfEvents = events.length;

  if (!events) {
    return next(errorMessage(res, 400, "Events not found !"));
  }

  res.status(200).json({
    success: true,
    numberOfEvents,
    events,
  });
});

//get single events
const getSingleEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(errorMessage(res, 400, "Event not found !"));
  }

  res.status(200).json({
    success: true,
    event,
  });
});

//update event
const updateEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) {
    return next(errorMessage(res, 400, "Event not found !"));
  }

  event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Event update successfully",
    event,
  });
});

//delete event
const deleteEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) {
    return next(errorMessage(res, 400, "Event not found !"));
  }

  await deleteImage([`public/uploads/eventsPhoto/${event.image}`]);

  await Event.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Event deleted successfully",
  });
});

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
