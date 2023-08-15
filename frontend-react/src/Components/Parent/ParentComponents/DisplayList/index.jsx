import React from 'react';
import './styles.css';
import profileUser from '../../../../assets/profile-user.png';

function DisplayList({ children, onSelectChild }) {
  return (
    <div className='list-main-container flex column fullwidth'>
      <div className='list-header'>
        <h2>List of Children</h2>
      </div>
      <div className="list-container flex center">
        <ul className='fullwidth'>
          {children ? (
            children.map(child => (
              <div className='flex pointer' key={child.id} onClick={() => onSelectChild(child.id)}>
                <img src={profileUser} alt="Profile User" />
                <li>{child.full_name}</li>
              </div>
            ))
          ) : (
            <p>This Parent Has no children.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DisplayList;
