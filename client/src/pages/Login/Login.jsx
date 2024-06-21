import React from 'react'
import { useState, useEffect } from 'react'
import './Login.scss'
import monkey from "../../images/monkey.png"


const Login = () => {
    const [user, setUser] = useState('')
    
    const [pwd, setPwd] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='container'>
            <div className='login-container'>
                <div className='login-input-section'>
                    <div className="logo">
                        <img src={monkey} className='logo-image' alt="logo" />
                        <h1 className='logo-name'>AHEND</h1>
                        <hr className='line'/>
                    </div>
                    <h2 className='register-header'>Login</h2>
                    <form className='form-container' onSubmit={handleSubmit}>
                        <div className='username-container'>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    id='username'
                                    placeholder='Username'
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-describedby='uidnote'
                                />
                            </div>
                        </div>
                        <div className='password-container'>
                            <div className='input-wrapper'>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Password'
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-describedby='pwdnote'
                                />
                            </div>
                        </div>
                        <div className='login-button-container'>
                            <button 
                                className="login-button"
                                type='submit' 
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                    <div className='register-link-container'>
                        Don't have an account?&nbsp;
                        <a className='register-link' href="/register">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login