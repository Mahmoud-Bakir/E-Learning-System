import React from 'react'
import './styles.css'
import CardChart from '../DataCard Chart'


function DataCard() {
  return (  
    <div className='datacard-container flex center fullwidth'>
      <div className="class-info-container">
        <h3>class_name</h3>
        <h4>class_description</h4>
      </div>
      <div className="grade-container">
        <h3>Average_grade</h3>
      </div>
      <div className="assignments-container">
        <h3>submitted_assignments<br/>/total_Assignments</h3>
      </div>
      <div className='attendance-container'>
        <h3>attended_sessions<br/>/sessions_number</h3>
      </div>
      {/* <div className='chart-container'>
        <h1>chart</h1>
        <CardChart/>
      </div> */}
    </div>
  )
}

export default DataCard