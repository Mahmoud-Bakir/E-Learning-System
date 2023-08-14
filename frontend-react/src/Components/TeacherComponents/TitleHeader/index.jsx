import React from 'react';
import './styles.css'

const TitleHeader = ({setCourseId, setClasstab}) => {

    

    return (
        <div className='title-header-container'>
            <h2 value="Class" onclick ={(e) => setClasstab(e.target.value)}  >Class</h2>
            <h2 value="Announcement" onclick ={(e) => setClasstab(e.target.value)}>Announcement</h2>
            <h2 value="Students" onclick ={(e) => setClasstab(e.target.value)}>Students</h2>
            <h2 value="Assignment" onclick ={(e) => setClasstab(e.target.value)}>Assignment</h2>
            <h2 onClick={()=>setCourseId(null)}>Back</h2>
        </div>
    );
}

export default TitleHeader;
