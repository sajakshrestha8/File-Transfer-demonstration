const express = require('express');
const app = express();
const net = require('net');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'sender/' });
const PORT = 8001;

app.use(cors());

let server, isStream = fs.createReadStream("./sender/SC-02.txt");

server = net.createServer(socket => {
  console.log(socket);
  socket.pipe(process.stdout);
  console.log("socket.pipe ma k aauxa", test);
  isStream.on("readable", function () {
    let data;
    console.log("Yo readable vitra ko data ho hai guys ", data)
    while (data = this.read()) {
      socket.write(data);
    }
  })
  isStream.on("end", function()  {
    socket.end();
  })
  socket.on("end", () => {
    server.close(() => console.log("Transfer is completed"));
  })
})

server.listen(8000, '0.0.0.0');

app.post('/sendFile',upload.single('file'), (req,res) => {
  const file = req.body;
  console.log(req.file);
  console.log(file);

  res.send(file);
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));