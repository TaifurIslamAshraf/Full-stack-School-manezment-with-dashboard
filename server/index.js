const initializeSocket = require("./socket");
const config = require("./src/config/config");

// Database connection
require("./src/config/database");

// Initialize Socket.IO server
const httpServer = initializeSocket();

httpServer.listen(config.app.PORT, () => {
  console.log(`Server is running at http://localhost:${config.app.PORT}`);
});
