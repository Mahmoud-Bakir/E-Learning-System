import React from 'react';
import './styles.css'

const TitleHeader = () => {
    return (
        <div className='title-header-container flex center'>
            <h2>Class</h2>
            <h2>Average Grade</h2>
            <h2>Assignments</h2>
            <h2>Attendance</h2>
        </div>
    );
}

export default TitleHeader;
