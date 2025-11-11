
- `client/`: code for initiating connection and sending files.  
- `server/`: code for accepting connections and writing incoming files to disk.

---

## 🛠️ Getting Started

### Prerequisites  
- Both devices are connected to the same LAN (local network).  
- Node.js (or whichever runtime you’re using) installed on each device.  
- Ensure the firewall allows the chosen port for incoming connections on the server.

### Setup & Usage  

1. **On the server device**  
   - Navigate to `server/`.  
   - Install dependencies (if any).  
   - Start the server, e.g. `node server.js`.  
   - The server will listen on a specified port (update in code/config if required).  

2. **On the client device**  
   - Navigate to `client/`.  
   - Install dependencies (if any).  
   - Run the client specifying the server’s IP address and port, and the file(s) to send, e.g.  
     ```bash
     node client.js 192.168.1.10 3000 sample.pdf
     ```  
   - The client connects to the server and sends the file.  

3. **On the server**  
   - The file arrives, and is stored in a designated folder (e.g., `received/`).  
   - The server may log status (connection, file size, transfer complete).

---

## 📌 Features

- Simple LAN-based file transfer (no external hosting required).  
- Supports arbitrary file(s) (depending on code extension).  
- Minimal dependencies — you can extend it for large files, multiple files, progress bars etc.  

---

## ✅ Why Use This?

- Great for learning networking fundamentals (sockets, streams, buffer handling) in a local environment.  
- Useful practical tool for ad-hoc file sharing in local environments (office, home).  
- Lightweight and offline — no reliance on internet upload/download speeds.

---

## 🔧 Possible Improvements

- Add UI for easier use (drag & drop, browse files).  
- Add encryption for file transfers.  
- Add resume/retry support for interrupted transfers.  
- Add file-type filtering, logging, user-friendly messages.  
- Support multi-file-batch transfers, directories.  
- Show progress bar/percentage during transfer.

---

## 📋 Licence

This project is open source — feel free to use, adapt, and extend it under the terms of your chosen licence.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, bug-fixes or enhancements:

1. Fork the repo.  
2. Create a new branch (`git checkout -b feature-xyz`).  
3. Commit your improvements (`git commit -m 'Add xyz'`).  
4. Push to your branch (`git push origin feature-xyz`).  
5. Open a Pull Request here on the main repo.  

---

## 👤 Author

**Sajak Shrestha** — student & developer —  
If you want to reach me or collaborate, feel free to open issues or pull requests.

---

Thank you for exploring this project — happy coding! 🎉  
