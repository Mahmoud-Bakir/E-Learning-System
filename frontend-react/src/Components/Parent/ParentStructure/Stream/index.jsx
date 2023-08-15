import React from 'react';
import './styles.css'

import AssignmentCard from '../../ParentComponents/AssignmentCard';
import JoinMeet from '../../ParentComponents/JoinMeet';

const Stream = ({selectedCourse, courseData}) => {
    return (
        <div>
            <div className='flex stream-body-container'>
                <JoinMeet courseData = {courseData}/>
                <AssignmentCard selectedCourse = {selectedCourse}/>
            </div>
            
        </div>
    );
}

export default Stream;
