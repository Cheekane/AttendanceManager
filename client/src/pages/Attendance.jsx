import React, { useState } from 'react'
import './styles/Attendance.scss'
import AddNewPerson from '../components/AddNewPerson'
import { Toaster, toast } from 'sonner'

const Attendance = () => {
  const [isSuccessful, setSuccessful] = useState(false)

  const sendSonner = (firstname, lastname) => {
    toast.success(`Successfully added ${firstname} ${lastname}`)
  };

  return (
    <div className="main-container">
      <div className="attendance-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Attendance</h1>
          </div>
            <AddNewPerson sendSonner={ sendSonner } />
        </div>
        <div className="home-body-container">
            <Toaster />
        </div>
      </div>
    </div>
  )
}

export default Attendance