import React, { useState } from 'react';

function Meeting({ url, title }) {
  const [meetingLink, setMeetingLink] = useState(url);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveMeetingLink = () => {
    setIsEditing(false);
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
          <button className="edit-button" onClick={handleToggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Meeting;
