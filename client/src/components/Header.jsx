import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { CircleUserRound } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen) // profile click reveals or hides dropdown
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <div className="header-container">
      <div className="header-section-container">
        <div className="profile-container">
          <CircleUserRound className="profile-icon" onClick={handleProfileClick}/>
          {isDropdownOpen && (
            <div className='profile-menu-container' ref={dropdownRef}>
              <ul>
                <li onClick={() => navigate('/profile')}>Profile</li>
                <li onClick={() => navigate('/settings')}>Settings</li>
                <li onClick={() => navigate('/logout')}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header