import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../Components/ParentComponents/Classes'
import sendRequest from '../../../Core/config/request.js'
import requestMethods from '../../../Core/enums/requestMethods'
import AdminNav from '../../../Components/AdminComponents/AdminNav/index'
import StudentNav from '../StudentNav'


const ViewClass = ()=> {
  const navigation = useNavigate();
  const [classes, setClasses ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Student/get_all_courses",
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
            return <ClassCard key={classs.id} classs={classs} btn={"enroll calss"}/>;
        })}
      </div>
    </div>
  )
}

export default ViewClass