import React, {useState} from 'react'
import './styles.css'
import Tabs from '../../../Components/Parent/ParentComponents/Tabs'
import Stream from '../../../Components/Parent/ParentStructure/Stream';

function CourseInfo() {

  const [filter, setFilter] = useState("all");
  const data = [
    {
      "Section": "Average Grade",
      "Average": 13,
      "AverageColor": "hsl(0, 70%, 50%)",
    },
    {
      "Section": "Submitted Assignments",
      "Submitted Assignments": 148,
      "AverageColor": "hsl(120, 70%, 50%)",
    },
    {
      "Section": "Attendance",
      "Attendance": 152,
      "AverageColor": "hsl(240, 70%, 50%)",
    },
    {
      "Section": "Progress",
      "Progress": 42,
      "AverageColor": "hsl(30, 70%, 50%)",
    }
  ]
  
  return (
    <div className='parent-container'>
    <Tabs onTabChanged={(value) => setFilter(value)}/>
    <Stream/>
    </div>
    
  )
}

export default CourseInfo