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