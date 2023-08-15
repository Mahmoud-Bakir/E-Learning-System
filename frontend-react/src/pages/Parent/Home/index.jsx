import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Landing from '../../../pages/Parent/Landing'
import CourseInfo from '../../../pages/Parent/CourseInfo'


const Parent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing/>} />
            </Routes>
        </div>
    );
}

export default Parent;

