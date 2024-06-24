import React, { useState } from 'react'
import './Attendance.scss'
import AddNewAttendee from '../../components/AddNewAttendee/AddNewAttendee'
import { Toaster, toast } from 'sonner'

const Attendance = () => {

  return (
    <div className="main-container">
      <div className="attendance-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Attendance</h1>
          </div>
            <AddNewAttendee />
        </div>
        <div className="home-body-container">
          <Toaster richColors />
          
        </div>
      </div>
    </div>
  )
}

export default Attendance