import React from 'react'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

import "./Header.scss"

const Header = () => {

  const { login, register } = useKindeAuth();

  return (
    <div className="header-container">
      <div id="logged_out_view">
        <button onClick={register} type="button">Register</button>
        <button onClick={login} type="button">Log In</button>
      </div>
    </div>
  )
}

export default Header