import React, { useState, useEffect, useRef } from 'react'
import { CircleUserRound } from 'lucide-react'
import SignedInDrop from '../SignedInDrop/SignedInDrop'
import "./Header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('Guest')
  const profileRef = useRef()
  const dropdownRef = useRef()

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !profileRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="header-container">
      <div className="header-section-container">
        <div className="profile-container">
          <CircleUserRound className="profile-icon" onClick={toggleDropdown} ref={profileRef} />
          {isOpen && (
            <SignedInDrop username={username} isOpen={isOpen} dropdownRef={dropdownRef} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header