import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../Components/StudentComponents/Classes'
import sendRequest from '../Core/config/request.js'
import requestMethods from '../Core/enums/requestMethods'
import StudentNav from '../StudentNav'


const Student = ()=> {
  const navigation = useNavigate();
  const [classes, setClasses ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Student/get_all_enrolled_courses",
          method: requestMethods.GET,
        });
        console.log(response.data);
        setClasses(response.data);
      } catch (error) {
        // console.log(error.response.status);
        if (error.response.status === 401) {
          // navigation("/Landing");
        }
      }              
    };
    fetchData();
  }, []);
  return (
    <div className='flex column page'>
      <div className="flex wrap">
        <StudentNav t1={"Home"} t2={"Find Course"}/>
        {classes.map((classs) => {
            return <ClassCard key={classs.id} p1={classs.course_name} p2 = {classs.description} p4 = {classs.teacher.FullName} p3 = {classs.id} btn={"view calss"} nav= {"/ViewAssignments"} enabled={true}/>;
        })}
      </div>
    </div>
  )
}

export default Student