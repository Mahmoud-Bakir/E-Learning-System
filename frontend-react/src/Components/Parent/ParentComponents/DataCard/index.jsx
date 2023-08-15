import React from 'react'
import './styles.css'
import CardChart from '../DataCard Chart'


function DataCard({ childClasses, onSelectClass }) {
  return (
    <div>
      {childClasses.length === 0 ? (
        <p>No classes available for this child.</p>
      ) : (
        childClasses.map((classInfo, index) => {
          console.log('classinfo:', classInfo); 
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
                  {Array.isArray(classInfo.submissions) ? classInfo.submissions.length : 0}
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

// import React, { useState } from 'react';
// import './styles.css';
// import CardChart from '../DataCard Chart';

// function DataCard({ childClasses }) {
//   const [selectedClassIndex, setSelectedClassIndex] = useState(0);

//   if (childClasses.length === 0) {
//     return <p>No classes available.</p>;
//   }

//   const selectedClassInfo = childClasses[selectedClassIndex];

//   return (
//     <div>
//       {childClasses.map((classInfo, index) => (
//         <div
//           key={index}
//           className={`datacard-container flex center fullwidth pointer ${index === selectedClassIndex ? 'selected' : ''}`}
//           onClick={() => setSelectedClassIndex(index)}
//         >
//           <div className="class-info-container">
//             <h3>{classInfo.course_name}</h3>
//             <h4>{classInfo.description}</h4>
//           </div>
//           <div className="grade-container">
//             <h3>{classInfo.average_class_grade}</h3>
//           </div>
//           <div className="assignments-container">
//             <h3>
//               {Array.isArray(classInfo.submissions) ? classInfo.submissions.length : 0}
//               <br/>
//               {Array.isArray(classInfo.assignments) ? classInfo.assignments.length : 0}
//             </h3>
//           </div>
//           <div className='attendance-container'>
//             <h3>{classInfo.attendance}<br/>{classInfo.sessions_number}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DataCard;
