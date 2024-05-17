import React from 'react'
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./Header.scss"

const Header = () => {
  const { login, register } = useKindeAuth()

  const { logout } = useKindeAuth()

  console.log(process.env.REACT_APP_CLIENT_ID)
  console.log(process.env.NODE_ENV)

  return (
    <div className="header-container">
      <div className="header-view-container">
        <div className="login-container">
          <button onClick={register} type="button">Register</button>
          <button onClick={login} type="button">Log In</button>
          <button onClick={logout} type="button">Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default Header