import React from 'react';
import './styles.css';

import CalendarLogo from "../../../../assets/google-calendar.png"

const JoinCalendly = (courseData) => {
    // console.log('calendly ', courseData.courseData.courseData.calendly_link);
    const calendlyLink = courseData.courseData.courseData.calendly_link;

    const handleJoinClick = () => {
        window.open(calendlyLink, '_blank');
      };
    return (
        <div className="google-calendly">
            <div className="google-calendly-top">
                <div>
                    <div className="google-calendly-logo">
                        <img
                            src={CalendarLogo}
                            alt="Google Calendar"
                        />
                    </div>
                    <div>Google Calendar</div>
                </div>
            </div>
            <div>
                <button onClick={handleJoinClick}>Book A Meeting</button>
            </div>
        </div>
    );
}

export default JoinCalendly;
