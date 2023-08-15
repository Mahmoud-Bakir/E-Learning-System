import React from 'react';
import './styles.css';

function Notification({ title, due = '', type }) {
  let img_src;
  
  if (type === 'assignment') {
    img_src = "https://static.thenounproject.com/png/3632613-200.png";
  } else {
    img_src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR417_La1N7VTLFfeMZnEQSrUzRjGAXgFZeEfwitb_P4Lu3SzrgCdzFN7fBOZkkdW4Nqio&usqp=CAU";
  }

  return (
    <div className='notification-container'>
      <img className="notification-icon" src={img_src} alt="Notification Icon" />
      <div className='notification-content'>
        <h3>{title}</h3>
        {due && <h5>Due {due}</h5>}
      </div>
    </div>
  );
}

export default Notification;
