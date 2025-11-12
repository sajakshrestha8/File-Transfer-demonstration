const net = require('net');
const fs = require('fs');
const remote_server = process.argv[2];

let socket;

socket = remote_server ? net.connect(remote_server) : net.connect(8000);

let ostream = fs.createWriteStream("./receiver/SC-02.txt");
let date = new Date(0);
let size = 0;
let elasped;

socket.on('data', (chunck) => {
  console.log(chunck);
  size += chunck.length;
  elasped = new Date(0) - date;
  socket.write(
    `\r${(size / (1024 * 1024)).toFixed(
      2
    )} MB of data was sent. Socket write ko Total elapsed time is ${elasped / 1000} s`
  );
  console.log(
    `\r${(size / (1024 * 1024)).toFixed(
      2
    )} MB of data was sent. stdout write ko Total elapsed time is ${elasped / 1000} s`
  );
  ostream.write(chunck);
})

socket.on('end', () => {
  console.log(
    `\nFinished getting file. speed was: ${(
      size /
      (1024 * 1024) /
      (elasped / 1000)
    ).toFixed(2)} MB/s`
  );
  process.exit();
})