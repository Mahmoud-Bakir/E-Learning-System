import React, { useState } from 'react';

function Meeting({ url, title, courseId }) {
  const [meetingLink, setMeetingLink] = useState(url);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    // Allow editing only for the Calendly title
    if (title === 'Calendly Link') {
      setIsEditing(!isEditing);
    }
  };

  const handleSaveMeetingLink = () => {
    fetch('http://127.0.0.1:8000/api/Teacher/calendly', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        id: courseId,
        calendly_link: meetingLink,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error saving calendly link');
        }
      })
      .then((data) => {
        setMeetingLink(data.calendly_link);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error saving calendly link:', error);
      });
  };
  

  const handleJoinMeeting = () => {
    window.open(meetingLink, '_blank');
  };

  return (
    <div className='meeting'>
      <h3>{title}</h3>
      {isEditing ? (
        <div>
          <input
            type='text'
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
          />
          <button className="join-button" onClick={handleSaveMeetingLink}>Save</button>
        </div>
      ) : (
        <div>
          <button className="join-button" onClick={handleJoinMeeting}>Join</button>
          {title === 'Calendly Link' && (
            <button className="edit-button" onClick={handleToggleEdit}>Edit</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Meeting;
