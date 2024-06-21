import React, { useState, useEffect } from "react"
import "./Home.scss"
import GroupCard from '../../components/GroupCard/GroupCard';
import AddNewGroup from "../../components/AddNewGroup/AddNewGroup";
import { Toaster, toast } from "sonner";

const Home = () => {

  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Dashboard</h1>
          </div>
          <AddNewGroup />
        </div>
        <div className="home-body-container">
          <GroupCard />
          <Toaster richColors />
        </div>
      </div>
    </div>
  )
}

export default Home
