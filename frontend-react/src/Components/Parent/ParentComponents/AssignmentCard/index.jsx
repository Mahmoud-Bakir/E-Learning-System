
// import React from 'react';
// import assignmentIcon from '../../../../assets/list.png';
// import './styles.css'

// const AssignmentCard = ({ selectedCourse }) => {
//     console.log('selectedCourse:', selectedCourse);
  
//     if (!selectedCourse || !selectedCourse.selectedCourse) {
//       console.log('No selectedCourse available.');
//       return <p>No selectedCourse available.</p>;
//     }
  
//     const assignments = selectedCourse.selectedCourse;
  
//     console.log('assignments:', assignments);
  
//     if (!Array.isArray(assignments)) {
//       console.log('assignments is not an array.');
//       return <p>Assignments data is not in the expected format.</p>;
//     }
  
//     return (
//       <div className='flex column fullwidth'>
//         {assignments.length === 0 ? (
//           <p>No assignments available.</p>
//         ) : (
//           assignments.map((assignment, index) => (
//             <div className='assignment-card-container flex column'>
//             <div key={index} className='flex column gap-15'>
//               <div className='flex row gap-15'>
//                 <div><img src={assignmentIcon} alt="Assignment Icon" /></div>
//                 <div><p>Teacher has posted a new assignment: <span className='bold'>{assignment.title}</span></p></div>
//               </div>
//               <div className='flex column '>
//                <div className='bold'><p>Description:</p></div>
//                 <div><p>{assignment.description}</p></div>
//             </div>
//             </div>
//             </div>
//           ))
//         )}
        
//       </div>
//     );
//   };
  
//   export default AssignmentCard;

import React from 'react';
import assignmentIcon from '../../../../assets/list.png';
import './styles.css';

const AssignmentCard = ({ selectedCourse }) => {
  console.log('selectedCourse:', selectedCourse);

  const assignments = selectedCourse;

  console.log('assignments:', assignments);

  const assignmentArray = Object.values(assignments);
  console.log('assignmentArray ', assignmentArray)

  return (
    <div className='flex column fullwidth'>
      {assignmentArray.length === 0 ? (
        <p>No assignments available.</p>
      ) : (
        assignmentArray.map((assignment, index) => (
          <div className='assignment-card-container flex column' key={index}>
            <div className='flex column gap-15'>
              <div className='flex row gap-15'>
                <div><img src={assignmentIcon} alt="Assignment Icon" /></div>
                <div>
                  <p>
                    Teacher has posted a new assignment:{' '}
                    <span className='bold'>{assignment.title}</span>
                  </p>
                </div>
              </div>
              <div className='flex column'>
                <div className='bold'><p>Description:</p></div>
                <div><p>{assignment.description}</p></div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AssignmentCard;