import React from 'react';
import './styles.css'
import ClassImageCard from '../../ParentComponents/ClassImageCard';
import JoinCalendly from '../../ParentComponents/JoinCalendly';
import Chat from '../../ParentComponents/Chat';

const TeacherCommunication = (courseData) => {
    return (
        <div>
            <div className='flex stream-body-container'>
                <JoinCalendly courseData = {courseData}/>
                <Chat/>
            </div>
            
        </div>
    );
}

export default TeacherCommunication;
