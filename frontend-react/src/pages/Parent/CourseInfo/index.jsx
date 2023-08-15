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

  const [filter, setFilter] = useState("all");
  // const data = [
  //   {
  //     "Section": "Average Grade",
  //     "Average": 13,
  //     "AverageColor": "hsl(0, 70%, 50%)",
  //   },
  //   {
  //     "Section": "Submitted Assignments",
  //     "Submitted Assignments": 148,
  //     "AverageColor": "hsl(120, 70%, 50%)",
  //   },
  //   {
  //     "Section": "Attendance",
  //     "Attendance": 152,
  //     "AverageColor": "hsl(240, 70%, 50%)",
  //   },
  //   {
  //     "Section": "Progress",
  //     "Progress": 42,
  //     "AverageColor": "hsl(30, 70%, 50%)",
  //   }
  // ]
  
  return (
    <div className='parent-container'>
    <NavBar/>
    <Tabs onTabChanged={(value) => setFilter(value)}/>
    <ClassImageCard/>
    {/* {filter === 'Course Analysis' ? <CourseAnalysis data = {data}/> : null} */}
    {filter === 'Course Analysis' ? <CourseAnalysis/> : null}
    {filter === 'Stream' ? <Stream /> : null}
    {filter === 'Teacher Communication' ? <TeacherCommunication /> : null}
    
 

    </div>
    
  )
}

export default CourseInfo