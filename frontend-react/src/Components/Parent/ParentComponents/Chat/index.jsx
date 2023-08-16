import React from 'react';
import './styles.css'

import ProfileUser from '../../../../assets/profile-user.png'
import sendMessage from '../../../../assets/paper-plane.png'

const Chat = () => {
    return (
        <div className='chat-container flex column fullwidth'>
            <div className="chat-header flex">
                <img 
                className='header-profile-img' 
                src={ProfileUser} 
                alt="Profile Icon" />
                <div className='flex column'>
                    <h3>Chat With Teacher Name</h3>
                    <p>9:00 AM, Today</p>
                </div>
            </div>

            <div className="parent-message">
                <div className='flex column'>
                    <p className='parent-message-content'>Hello, how are you today?</p>
                    <p className='parent-message-date'>9:00 AM, Today</p>
                </div>
            </div>   
            
                <div className="teacher-message flex">
                    <div className='flex column'>
                        <p className='teacher-message-content'>Hello, how are you today?</p>
                        <p className='teacher-message-date'>9:00 AM, Today</p>
                    </div>
                </div>

                <div className = 'message-input-container flex'>
                    <input type="text" />
                    <img src={sendMessage} alt="Send Message Icon" />
                </div>   
        </div>
    );
}

export default Chat;
