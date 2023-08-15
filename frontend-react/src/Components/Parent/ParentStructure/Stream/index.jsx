import React from 'react';
import './styles.css'

import AssignmentCard from '../../ParentComponents/AssignmentCard';
import JoinMeet from '../../ParentComponents/JoinMeet';
import ClassImageCard from '../../ParentComponents/ClassImageCard';

const Stream = () => {
    return (
        <div>
            <div className='flex stream-body-container'>
                <JoinMeet/>
                <AssignmentCard/>
            </div>
            
        </div>
    );
}

export default Stream;
