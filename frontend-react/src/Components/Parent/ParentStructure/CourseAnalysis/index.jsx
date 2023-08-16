import React from 'react';
import './index.css'

import Chart from '../../ParentComponents/Chart'

const CourseAnalysis = (selectedCourse) => {

    const attendancePercentage = Math.round((selectedCourse.selectedCourse.attendance / selectedCourse.selectedCourse.sessions_number) * 100)

    let totalSubmissions = 0;

    selectedCourse.selectedCourse.assignments.forEach((assignment) => {
        totalSubmissions += assignment.submissions.length;
    });
 
    const totalAssignments = selectedCourse.selectedCourse.assignments.length
    const submissionsPercentage = Math.round((totalSubmissions / totalAssignments) * 100);

    const data = [
        {
          "Section": "Average Grade",
          "Average": selectedCourse.selectedCourse.average_class_grade,

          "AverageColor": "hsl(0, 70%, 50%)",
        },
        {
          "Section": "Submitted Assignments %",
          "Submitted Assignments": submissionsPercentage,
          "AverageColor": "hsl(120, 70%, 50%)",
        },
        {
          "Section": "Attendance %",
          "Attendance": attendancePercentage,
          "AverageColor": "hsl(240, 70%, 50%)",
        }
      ]

    return (
        <div className='course-chart-container'>
            <h2>Course Analysis Bar Chart</h2>
            <div className='chart'><Chart data = {data}/></div>
        </div>
    );
}

export default CourseAnalysis;
