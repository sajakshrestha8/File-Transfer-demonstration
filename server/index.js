const net = require('net');
const fs = require('fs');

let server, isStream = fs.createReadStream("./sender/SC-02.txt");

server = net.createServer(socket => {
  socket.pipe(process.stdout);
  isStream.on("readable", function () {
    let data;
    while (data = this.read()) {
      socket.write(data);
    }
  })
  isStream.on("end", function() {
    socket.end();
  })
  socket.on("end", () => {
    server.close(() => console.log("Transfer is completed"));
  })
})

server.listen(8000, '0.0.0.0');