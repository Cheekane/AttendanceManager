import React from 'react'
import './styles/Attendance.scss'
import AddNewPerson from '../components/AddNewPerson'

const Attendance = () => {


  return (
    <div className="main-container">
      <div className="attendance-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Attendance</h1>
          </div>
            <AddNewPerson />
        </div>
        <div className="home-body-container">
          
        </div>
      </div>
    </div>
  )
}

export default Attendance