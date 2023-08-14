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
                <div className="icon">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div>
                <button id="btnJoin">Join</button>
            </div>
        </div>
    );
}

export default JoinMeet;
