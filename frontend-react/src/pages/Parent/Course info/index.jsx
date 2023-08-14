import React, {useState} from 'react'
import './styles.css'
import Tabs from '../../../Components/ParentComponents/Tabs'
import Chart from '../../../Components/ParentComponents/Chart'

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
    },
  ]
  
  return (
    <div className='parent-container'>
    <Tabs onTabChanged={(value) => setFilter(value)}/>
    <div className='chart'><Chart data = {data}/></div>
    
    </div>
    
  )
}

export default CourseInfo