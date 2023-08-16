import React from 'react'
import './styles.css'
import CardChart from '../DataCard Chart'


function DataCard({ childClasses, onSelectClass }) {
  let totalSubmissions = 0

  childClasses.forEach((classInfo) => {
    classInfo.assignments.forEach((assignment) => {
      totalSubmissions += assignment.submissions.length;
    });
  });

  return (
    <div>
      {childClasses.length === 0 ? (
        
        <h3>Choose a child</h3>
      ) : (
        childClasses.map((classInfo, index) => {
          return (
            <div className='datacard-container flex center fullwidth pointer' key={classInfo.id} index = {index} onClick = {() => onSelectClass(classInfo.id, index)}>
              <div className="class-info-container">
                <h3>{classInfo.course_name}</h3>
              </div>
              <div className="grade-container fullwidth">
                <h3>{classInfo.average_class_grade}</h3>
              </div>
              <div className="assignments-container fullwidth">
                <h3>
                  {totalSubmissions}
                  /
                  {Array.isArray(classInfo.assignments) ? classInfo.assignments.length : 0}
                </h3>
              </div>
              <div className='attendance-container fullwidth'>
                <h3>{classInfo.attendance}/{classInfo.sessions_number}</h3>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DataCard
