import React, {useState} from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom';
import NavBar from '../../../Components/Parent/ParentComponents/NavBar'
import Tabs from '../../../Components/Parent/ParentComponents/Tabs'
import CourseAnalysis from '../../../Components/Parent/ParentStructure/CourseAnalysis'
import Stream from '../../../Components/Parent/ParentStructure/Stream';
import TeacherCommunication from '../../../Components/Parent/ParentStructure/TeacherCommunication';
import ClassImageCard from '../../../Components/Parent/ParentComponents/ClassImageCard';

function CourseInfo() {

  const location = useLocation();
  const { state } = location;

  const { selectedCourse } = state;
  console.log (selectedCourse)

  const [filter, setFilter] = useState("Course Analysis");
  
  return (
    <div className='parent-container'>
    <NavBar/>
    <Tabs onTabChanged={(value) => setFilter(value)}/>
    <ClassImageCard/>
    {/* {filter === 'Course Analysis' ? <CourseAnalysis data = {data}/> : null} */}
    {filter === 'Course Analysis' ? <CourseAnalysis selectedCourse = {selectedCourse}/> : null}
    {filter === 'Stream' ? <Stream /> : null}
    {filter === 'Teacher Communication' ? <TeacherCommunication /> : null}
    
 

    </div>
    
  )
}

export default CourseInfo