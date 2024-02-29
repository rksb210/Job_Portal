import axios from "axios";
import { useState } from "react";

export default function FileUpload() {
  const [resume, setResume] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {resume:resume,inputvalue:inputValue}
    // let formData = new FormData();
    // formData.append("resume", resume);
    // formData.append('inputvalue',inputValue) 
    // console.log("form:",formData)   
    try {                                                                        //formData
        const response = await axios.post('http://localhost:8000/apply/applyjob', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("resssss",response.data);
        
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};
  

  const handleLogo = (event) => {
    setResume(event.target.files[0]);
  };
  return (
    <div>
      <input
        type="file"
        accept="images/*"
        multiple
        onChange={handleLogo}
        name="resume"
      />
      <input type="text" placeholder="enter" onChange={(e)=>setInputValue(e.target.value)}/>
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}
