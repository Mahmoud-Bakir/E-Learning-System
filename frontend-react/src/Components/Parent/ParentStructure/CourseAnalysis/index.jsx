import React from 'react';
import './index.css'

import Chart from '../../ParentComponents/Chart'

const CourseAnalysis = () => {

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

    const log = (data) => {
        console.log(data)
    }
    

    log(data)
    return (
        <div>
            <div className='chart'><Chart data = {data}/></div>
            {/* <div className='chart'><Chart /></div> */}
        </div>
    );
}

export default CourseAnalysis;
