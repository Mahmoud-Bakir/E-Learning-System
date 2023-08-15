import React from 'react';
import './index.css'

import Chart from '../../ParentComponents/Chart'

const CourseAnalysis = (selectedCourse) => {

    const data = [
        {
          "Section": "Average Grade",
        //   "Average": selectedCourse.data.average_class_grade,
            "Average": 0,
          "AverageColor": "hsl(0, 70%, 50%)",
        },
        {
          "Section": "Submitted Assignments %",
          "Submitted Assignments": 0,
          "AverageColor": "hsl(120, 70%, 50%)",
        },
        {
          "Section": "Attendance",
          "Attendance": 152,
          "AverageColor": "hsl(240, 70%, 50%)",
        }
      ]

    const log = (data) => {
        console.log(selectedCourse.data)
        // console.log( 'chart Data ',selectedCourse.data.assignments.length)
        // console.log( 'chart Data ',selectedCourse.data.assignments.submissions)
    }
    
    log(data)
    
    return (
        <div>
            <div className='chart'><Chart data = {data}/></div>
        </div>
    );
}

export default CourseAnalysis;
