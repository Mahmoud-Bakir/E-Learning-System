import React from 'react';
import './styles.css'

import ProfileUser from '../../../../assets/profile-user.png'

const Chat = () => {
    return (
        <div className='chat-container fullwidth'>
            <div className="chat-header flex">
                <img 
                className='header-profile-img' 
                src={ProfileUser} 
                alt="Profile Icon" />
                <h3>Chat With Teacher Name</h3>
            </div>    
            
        </div>
    );
}

export default Chat;
