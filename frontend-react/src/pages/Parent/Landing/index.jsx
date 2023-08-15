import React, {useEffect, useState} from 'react'
import './styles.css'
import DisplayList from '../../../Components/Parent/ParentComponents/DisplayList'
import DataCard from '../../../Components/Parent/ParentComponents/DataCard'
import TitleHeader from '../../../Components/Parent/ParentComponents/TitleHeader'
import NavBar from '../../../Components/Parent/ParentComponents/NavBar'
import ClassImageCard from '../../../Components/Parent/ParentComponents/ClassImageCard'

import axios from "axios";
import { sendRequest } from "../../../Core/config/request";
import { requestMethods } from "../../../Core/enums/requestMethods";
import { useNavigate } from "react-router-dom";


function Landing() {

  const navigation = useNavigate();

  const [childrenData, setChildrenData] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(null);
  const [selectedChildClasses, setSelectedChildClasses] = useState([]);

  const [selectedCourseId, setselectedCourseId] = useState(null);
  const [selectedCourseIndex, setselectedCourseIndex] = useState(null);
  const [selectedCourse, setselectedCourse] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/Parent/get_all_children_Data",
          method: requestMethods.GET,
        });

        console.log(response.data.children)
        setChildrenData(response.data.children)

      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          navigation("/");
        }
      }
    };

    fetchData();
  }, []);

  const handleSelectChild = (childId) => {
    setSelectedChildId(childId);

    const selectedChild = childrenData.find(child => child.id === childId);

    if (selectedChild) {
      
      setSelectedChildClasses(selectedChild.classes);
 
    } else {
      console.log("Selected Child not found.");
      setSelectedChildClasses([]);
    }
  };

  const handleSelectedCourse = (courseId, index) => {
    setselectedCourseId(courseId)
    setselectedCourseIndex(index)
 
    setselectedCourse(selectedChildClasses[index])

    if (selectedCourseId !== null && selectedCourseIndex !== null) {
      // console.log('entered');
      navigation("/course", {
        state: {
          selectedCourse: selectedChildClasses[selectedCourseIndex]
        }
      });
    }
  }

  return (
  <div className="parent-navbar">
    <NavBar/>
    <ClassImageCard className="class-image"/>
    <div className='flex column center parent-container'>  
      <div className='flex fullwidth'>
        <DisplayList children = {childrenData} onSelectChild={handleSelectChild}/>
        <div className='fullwidth'>
          <TitleHeader/>
          <DataCard childClasses={selectedChildClasses} onSelectClass = {handleSelectedCourse}/>
        </div>  
      </div>
    </div>
  </div>
    
  )
}

export default Landing