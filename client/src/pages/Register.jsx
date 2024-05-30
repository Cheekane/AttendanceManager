import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCheck, faTimes, faC } from '@fortawesome/free-solid-svg-icons'
import monkey from "../images/monkey.png"
import './Register.scss'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

const Register = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // sets focus to userRef
    useEffect(() => {
        userRef.current.focus()
    }, [])

    // tests if user input meets regex requirements
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    // tests if pwd input meets regex requirements and matchPwd matches pwd
    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    // clears error msg when updating username, pwd, or matchPwd
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        // prevents default page refresh
        e.preventDefault()
        
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return
        }
        setSuccess(true)
    }

    return (
        <div className='container'>
            <div className='register-container'>
                <div className='register-input-section'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="logo">
                        <img src={monkey} className='logo-image' alt="logo" />
                        <h1 className='logo-name'>AHEND</h1>
                        <hr className='line'/>
                    </div>
                    <h2 className='register-header'>Register</h2>
                    <form className='form-container' onSubmit={handleSubmit}>
                        <div className='username-container'>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    id='username'
                                    ref={userRef}
                                    placeholder='Username'
                                    autoComplete='off'
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby='uidnote'
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <span className='validation-icon'>
                                    <span className={validName ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validName || !user ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </span>
                            </div>
                            <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                &nbsp; 4 to 24 characters.<br/>
                                Must begin with a letter.<br/>
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </div>
                        <div className='password-container'>
                            <div className='input-wrapper'>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Password'
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby='pwdnote'
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <span className='validation-icon'>
                                    <span className={validPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </span>
                            </div>
                            <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                &nbsp; 8 to 24 characters.<br/>
                                Must include uppercase, lowercase letters and numbers.
                            </p>
                        </div>
                        <div className='confirm-password-container'>
                            <div className='input-wrapper'>
                                <input
                                    type='password'
                                    id='confirm_pwd'
                                    placeholder='Confirm password'
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby='confirmnote'
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <span className='validation-icon'>
                                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </span>
                            </div>
                            <p id='confirmnote' className={matchPwd && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                &nbsp; Passwords must match.<br/>
                            </p>
                        </div>
                    </form>
                    <div className='register-button-container'>
                        <button 
                            className="register-button"
                            type='submit' 
                            disabled={validName && validPwd && validMatch ? false : true}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className='login-link-container'>
                        Have an account?&nbsp;
                        <a className='login-link' href="/login">Log in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register