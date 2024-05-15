import React from 'react'
import { Link } from "react-router-dom"
import monkey from "../images/monkey.png"
import "./SideNav.scss"

const SideNav = () => {
  return (
    <div className="sidenav-container">
        <div className="logo">
          <img src={monkey} className='logo-image' alt="logo" />
          <h1 className='logo-name'>AHEND</h1>
          <hr className='line'/>
        </div>
        <ul>
            <li>
              <Link to="/profile" className='nav-links'>Profile</Link>
            </li>
            <li>
              <Link to="/events" className='nav-links'>Events</Link>
            </li>
            <li>
              <Link to="/contacts" className='nav-links'>Contacts</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideNav