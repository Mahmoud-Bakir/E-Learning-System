import React from 'react';
import './styles.css'

import assignmentIcon from '../../../../assets/list.png'

const AssignmentCard = () => {
    return (
        <div className='assignment-card-container flex column fullwidth'>
            <div className='flex'>
                <div>
                <img src={assignmentIcon} alt="Assignment Icon" />
                </div>
                <div>
                    <p>Teacher has posted a new assignment: Assignment title</p>
                </div>
            </div>
            <div className='flex'>
                <p>Description:<br/>
                Item Description</p>
            </div>
        </div>
    );
}

export default AssignmentCard;
