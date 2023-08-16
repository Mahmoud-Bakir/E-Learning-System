import "./style.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddUser = () => {
  const navigater = useNavigate();
  const signup = () => navigater("/Dashboard");
  const home = () => navigater("/Dashboard");
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    user_type: ""
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
    
    const response = await axios.post("http://127.0.0.1:8000/api/Admin/create_user", data, {
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
      <span className="part button-text">User Type </span>
      <select name="user_type" onChange={handleDataChange}>
        <option value="4">student</option>
        <option value="2">teacher</option>
        <option value="3">parent</option>
       </select>
    </div>
    <div className="flex column part ">
    <span className="part button-text">First Name</span>
    <input className="s-up-input" type="text" placeholder="First Name" name="first_name" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Last Name</span>
    <input className="s-up-input" type="text" placeholder="Last Name" name="last_name" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Email</span>
    <input className="s-up-input" type="email" placeholder="Email" name="email" size={40} onChange={handleDataChange}/>
    </div>
    <div className="flex column part ">
    <span className="part button-text">Password </span>
    <input className="s-up-input" type="password" placeholder="Password" name="password" size={40} onChange={handleDataChange}/>
    </div>
    
    <button className="button-text width-20 submit-button pointer" onClick={handleSignup}>Submit</button>
    <button className="button-text width-20 submit-button pointer" onClick={home}>Back</button>
    </div>
    
    </div>

 

  </>
  );
};
export default AddUser;
