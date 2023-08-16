import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../Components/StudentComponents/Classes'
import sendRequest from '../Core/config/request.js'
import requestMethods from '../Core/enums/requestMethods'
import StudentNav from '../StudentNav'


const ViewAssignments = ()=> {
  const navigation = useNavigate();
  const [assignments, setAssignments ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Student/class_assignments",
          method: requestMethods.POST,
          body: { course_id: localStorage.getItem("course_id")}
        });
        console.log(response.classassignments);
        if (Array.isArray(response.classassignments)) {
            setAssignments(response.classassignments);
          } else {
            setAssignments([]); // or handle the empty case in another way
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
        {assignments.map((asg) => {
            const hasSolution = asg.submissions.length > 0
            return <ClassCard key={asg.id} p1={asg.title} p2 = {asg.description} p4 = {asg.due_date} p3 = {asg.couesr_id} btn={"submit solution"} nav= {"/SubmitSolution"} enabled={hasSolution}/>;
        })}
      </div>
    </div>
  )
}

export default ViewAssignments