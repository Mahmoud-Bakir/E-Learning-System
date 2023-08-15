import React, { useState,useEffect,useNavigate } from 'react'
import ClassCard from '../../Components/ParentComponents/Classes'
import sendRequest from '../../Core/config/request'

const Student = ()=> {
  const navigation= useNavigate();
  const [classes, setClasses ] = useState([{

  }])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Student/get_all_enrolled_courses",
          method: "GET",
        });
        setClasses(response.data);
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          navigation("/Landing");
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className='flex column page'>
      <div className="flex wrap">

      </div>
    </div>
  )
}

export default Student