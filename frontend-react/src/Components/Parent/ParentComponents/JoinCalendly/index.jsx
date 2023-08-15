import React from 'react';
import './styles.css';

import CalendarLogo from "../../../../assets/google-calendar.png"

const JoinCalendly = () => {
    return (
        <div className="google-meet">
            <div className="google-meet-top">
                <div>
                    <div className="google-meet-logo">
                        <img
                            src={CalendarLogo}
                            alt="Google Calendar"
                        />
                    </div>
                    <div>Google Calendar</div>
                </div>
            </div>
            <div>
                <button>Book A Meeting</button>
            </div>
        </div>
    );
}

export default JoinCalendly;
