import React from 'react'
import { Link } from "react-router-dom"
import { LayoutDashboard, UsersRound, Settings } from "lucide-react"
import monkey from "../images/monkey.png"
import "./SideNav.scss"

const SideNav = () => {

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/"
    },
    {
      id: 2,
      name: "Attendance",
      icon: <UsersRound />,
      path: "/attendance"
    },
    {
      id: 3,
      name: "Settings",
      icon: <Settings />,
      path: "/settings"
    }
  ]

  return (
    <div className="sidenav-container">
        <div className="logo">
          <img src={monkey} className='logo-image' alt="logo" />
          <h1 className='logo-name'>ATEND</h1>
          <hr className='line'/>
        </div>
        <div className='menu-container'>
          {menuList.map((menu) => (
            <Link to={menu.path} key={menu.id} className="menu-item">
              <div className="menu-content">
                <span className="menu-icon">{menu.icon}</span>
                <span className="menu-name">{menu.name}</span>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SideNav