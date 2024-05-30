import React from 'react'
import { useNavigate } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header-container">
      <div className="header-view-container">
        <div className="login-container">
          <button onClick={() => {navigate('/register')}} type='button'>Sign up</button>
          <button onClick={() => {navigate('/login')}} type='button'>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Header