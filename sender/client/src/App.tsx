import axios from "axios";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOnFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }
  
  const handleSendFile = async() => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await axios.post("http://localhost:8001/sendFile", formData, {
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(selectedFile); 
  return (
    <div>
      <h1>Add the file below</h1>
      <input type="file" accept=".txt" name="file" onChange={(e) => handleOnFileChange(e)} />
      <button onClick={handleSendFile}>Send</button>
    </div>
  )
}

export default App;
