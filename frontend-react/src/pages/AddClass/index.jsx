import "./style.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddClass = () => {
  const navigater = useNavigate();
  const signup = () => navigater("/Dashboard");
  const home = () => navigater("/Dashboard");
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    teacher_email: "",
    course_name: "",
    category_name: "",
    enrollment_limit: "",
    sessions_number: "",
    meeting_link:""
  });
  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSignup = async () => {
    if (data.user_type=="2"){
      data.user_type=2
      console.log(data.user_type)
    }
    
    const response = await axios.post("http://127.0.0.1:8000/api/Admin/create_course", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
    home()

  };
  return (
  <>
  <div className="s-up-container">
  <div className="s-up-form">
    <span className="button-text"> Please Fil the form </span>
    <div className="flex column part ">
    <span className="part button-text">Teacher Email</span>
    <input className="s-up-input" type="email" placeholder="Email" name="teacher_email" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Course Name</span>
    <input className="s-up-input" type="text" placeholder="Course Name" name="course_name" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Category</span>
    <input className="s-up-input" type="text" placeholder="Category" name="category_name" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">enrollment Limit </span>
    <input className="s-up-input" type="number" placeholder="Peers limit" name="enrollment_limit" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Number Of Sesions </span>
    <input className="s-up-input" type="number" placeholder="number of sessions" name="sessions_number" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Meeting Link</span>
    <input className="s-up-input" type="text" placeholder="Meeting Link" name="meeting_link" size={40} onChange={handleDataChange}/>
    </div>
    
    <button className="button-text width-20 submit-button pointer" onClick={handleSignup}>Submit</button>
    <button className="button-text width-20 submit-button pointer" onClick={home}>Back</button>
    </div>
    
    </div>

 

  </>
  );
};
export default AddClass;
