import React from 'react';
import './styles.css'
import ClassImageCard from '../../ParentComponents/ClassImageCard';
import JoinCalendly from '../../ParentComponents/JoinCalendly';
import Chat from '../../ParentComponents/Chat';

const TeacherCommunication = () => {
    return (
        <div>
            <div>
                <ClassImageCard/>
            </div>
            <div className='flex stream-body-container'>
                <JoinCalendly/>
                <Chat/>
            </div>
            
        </div>
    );
}

export default TeacherCommunication;
