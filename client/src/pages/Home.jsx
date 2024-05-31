import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.scss"

const Home = () => {
  const [members, setMembers] = useState([])
  const navigate = useNavigate()

  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/members")
        setMembers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllMembers()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/member/${id}`)
      setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickInfo = (id) => { // handles clicks on info buttons
    navigate(`/memberInfo/${id}`)
  }

  const handleClickAdd = () => { // handles clicks on add buttons
    navigate("/add");
  }

  return (
    <div className="main-container">
      <div className="dashboard-container">
        <div className="home-top-container">
          <div className="section-name-container">
            <h1 className="section-name">Dashboard</h1>
          </div>
          <div className="add-group-container">
            <button className="add-group" type="button" onClick={handleClickAdd}>+ New Group</button>
          </div>
        </div>
        <div className="home-body-container">
          
        </div>
      </div>
    </div>
  )
}

export default Home
