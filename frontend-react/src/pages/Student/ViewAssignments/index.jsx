import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../Components/ParentComponents/Classes'
import sendRequest from '../../../Core/config/request.js'
import requestMethods from '../../../Core/enums/requestMethods'
import StudentNav from '../StudentNav'


const ViewAssignments = ()=> {
  const navigation = useNavigate();
  const [classes, setClasses ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Student/class_assignments",
          method: requestMethods.POST,
          body: { course_id: localStorage.getItem("course_id")}
        });
        console.log(response.classassignments);
        if (Array.isArray(response)) {
            setClasses(response.classassignments);
          } else {
            setClasses([]); // or handle the empty case in another way
          }
        // setClasses(response.data);
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
        <ClassCard key={1} p1={"title"} p2 = {"description"} p4 = {"due_date"} p3 = {"couesr_id"} btn={"view assignment"} />;
        {/* {classes.map((classs) => {
            return <ClassCard key={classs.id} p1={classs.title} p2 = {classs.description} p4 = {classs.due_date} p3 = {classs.couesr_id} btn={"view assignment"} />;
        })} */}
      </div>
    </div>
  )
}

export default ViewAssignments