const { createServer } = require("http");
const app = require("./app");

const initializeSocket = () => {
  const httpServer = createServer(app);
  const io = require("socket.io")(httpServer);

  io.on("connection", (socket) => {});

  return httpServer;
};

module.exports = initializeSocket;
