import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { LogOut, Settings, BookUser } from 'lucide-react'
import './SignedInDrop.scss'


const SignedInDrop = ({ username, isOpen, dropdownRef }) => {
    const navigate = useNavigate();

    const dropdownList = [
        {
            name: "Profile",
            path: "/profile",
            icon: <BookUser />
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <Settings />
        },
        {
            name: "Logout",
            path: "/logout",
            icon: <LogOut />
        }
    ]
    
    return (
        <div className={`profile-menu-container ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <ul className='dropdown-container'>
                <li className='dropdown-top-container'>
                    <div className='profile-username-container'>
                    <label className='profile-username'>
                        {username}
                    </label>
                    </div>
                </li>
                {dropdownList.map((item) => (
                    <li className='dropdown-link-container' onClick={() => navigate(item.path)}>
                        <label className='dropdown-item'>
                            {item.icon}&nbsp;{item.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SignedInDrop