const socketConnection = (io) => {
   io.on("connection", (socket) => {
      console.log(`Socket connected ${socket.id}`);

      // Disconnect socket
      socket.on("disconnect", () => {
         console.log("Socket disconnected");
      });

      // Join a room with watchers id
      socket.on("join", (watcherId) => {
         socket.join(watcherId);
      });
   });
};

module.exports = socketConnection;
