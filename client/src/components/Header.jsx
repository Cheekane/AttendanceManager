import React, { useState, useEffect, useRef } from 'react'
import { CircleUserRound } from 'lucide-react'
import SignedInDrop from './SignedInDrop'
import "./Header.scss"

const Header = () => {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [username, setUsername] = useState('Guest')

  const toggleDropdown = () => {
    setIsDropdownOpen(true) // profile click reveals or hides dropdown
  }

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
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
          <CircleUserRound className="profile-icon" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <SignedInDrop username={username} dropdownRef={dropdownRef} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header