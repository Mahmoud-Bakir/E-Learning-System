import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './style.css'
import ClassCard from '../../../Components/StudentComponents/Classes'
import sendRequest from '../Core/config/request.js'
import requestMethods from '../Core/enums/requestMethods'
import StudentNav from '../StudentNav'


const SubmitSolution = ()=> {
  const navigation = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('assignment', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/Student/submit_assignment', formData, {
        // You might need to include headers or authentication tokens here
      });

      if (response.status === 200) {
        alert('Assignment uploaded successfully!');
      } else {
        alert('Failed to upload assignment. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading assignment:', error);
      alert('An error occurred while uploading the assignment.');
    }
  };

  return (
    <div className='flex column page'>
      <div className="flex wrap">
        <StudentNav t1={"Home"} t2={"Find Course"}/>
        <div className="upload-container">
          <h2>Upload Assignment</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitSolution