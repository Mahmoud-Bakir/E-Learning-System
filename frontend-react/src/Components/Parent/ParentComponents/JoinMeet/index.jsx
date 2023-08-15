import React from 'react';
import './styles.css';

import MeetLogo from "../../../../assets/logo_meet.png"

const JoinMeet = () => {
    return (
        <div className="google-meet">
            <div className="google-meet-top">
                <div>
                    <div className="google-meet-logo">
                        <img
                            src={MeetLogo}
                            alt="Google Meet"
                        />
                    </div>
                    <div>Meet</div>
                </div>
            </div>
            <div>
                <button>Join</button>
            </div>
        </div>
    );
}

export default JoinMeet;
