const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./src/middlewares/error");

const eventRouter = require("./src/routers/event.router");
const newsRouter = require("./src/routers/news.router");
const noticeRouter = require("./src/routers/notice.router");
const AdmissionRouter = require("./src/routers/admission.router");
const UserRouter = require("./src/routers/user.router");
const TeacherRouter = require("./src/routers/teacher.router");
const ResultRouter = require("./src/routers/result.route");
const StudentRouter = require("./src/routers/student.router");
const AdmitRouter = require("./src/routers/admit.router");

const app = express();

//config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static("public/uploads"));

//all router
app.use("/api", eventRouter);
app.use("/api", newsRouter);
app.use("/api", noticeRouter);
app.use("/api", AdmissionRouter);
app.use("/api", UserRouter);
app.use("/api", TeacherRouter);
app.use("/api", ResultRouter);
app.use("/api", StudentRouter);
app.use("/api", AdmitRouter);

//error handaling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
