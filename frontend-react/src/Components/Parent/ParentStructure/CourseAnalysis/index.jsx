import React from 'react';
import './index.css'

import Chart from '../../ParentComponents/Chart'

const CourseAnalysis = (data) => {
    return (
        <div>
            <div className='chart'><Chart data = {data}/></div>
        </div>
    );
}

export default CourseAnalysis;
