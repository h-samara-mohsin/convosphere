socket.on("sendMessage", (message) => {

  io.emit("receiveMessage", message);

});