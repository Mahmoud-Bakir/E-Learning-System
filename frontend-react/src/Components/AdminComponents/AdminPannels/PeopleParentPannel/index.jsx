import "./style.css"
import Header from "../../Header"

import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import ParentPannelData from "../../../ParentPannelData"

 const PeopleparentPannel = () => {
  const token = localStorage.getItem('token');
  const [records,setRecords] = useState([])


  
  useEffect(() => {
    async function getParents() {
    const response = await axios.get('http://127.0.0.1:8000/api/Admin/get_parents', {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const parents=response.data.parents
    console.log(parents)
    const recs = parents.map(parent => ({
      id: parent.id,
      userType: parent.user_type,
      email: parent.email,
      first_name: parent.first_name,
      last_name: parent.last_name,
      
    }));
    setRecords(recs)
    console.log(recs)
  }
  getParents()},[])
 
  




  return (
    <div className='flex column  width-65 margin-20 circular-20 padding-10 border-pannel pannel secondary-bg pannel-data'>
      <table>
      <Header t1={"ID"} t2={"First Name"} t3={"Last Name"} t4={"email"} t5={"Analytics"} t6={"Actions"}/>
      <ParentPannelData records={records} />
      </table>  
    </div>
  )
  }
 export default PeopleparentPannel
