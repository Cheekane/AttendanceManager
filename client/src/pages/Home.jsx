import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "../components/SearchBar.jsx"
import Header from "../components/Header.jsx"
import "./Home.scss"
import SideNav from "../components/SideNav.jsx"

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
      <div className="body-container">
        <div className="section-name-container">
          <h1 className="section-name">Dashboard</h1>
        </div>
        <div className="add-group-container">
          <button className="add-group" type="button" onClick={handleClickInfo}>+ New Group</button>
        </div>
      </div>
    </div>
  )
}

export default Home
