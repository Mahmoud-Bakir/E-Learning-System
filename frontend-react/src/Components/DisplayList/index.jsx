import React from 'react'
import './styles.css'

import profileUser from '../../assets/profile-user.png'

function DisplayList() {
  return (
    <div className='list-main-container flex column fullwidth'>
      <div className='fullwidth'>
        <h2>List of Children</h2>
      </div>
    <div className="list-container flex">
      <ul className='fullwidth'>
        <div className='flex pointer '>
        <img src={profileUser} alt="Profile User" />
        <li>Joe Haddad</li>
        </div>
        <div className='flex pointer'>
        <img src={profileUser} alt="Profile User" />
        <li>Child 2</li>
        </div>
        <div className='flex pointer'>
        <img src={profileUser} alt="Profile User" />
        <li>Child 3</li>
        </div>
      </ul>
    </div>
    </div>
  )
}

export default DisplayList