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
      <SideNav/>
      <Header/>
      <div className="body-container">
      
        <button className="add-button" onClick={handleClickAdd}>
          + Add Member
        </button>
        <SearchBar results={ results } setResults={ setResults } />

        <div className="members">
          {members.map((member) => (
            <div key={member.id} className="member">
              <h2>{member.firstname} {member.lastname}</h2>
              <button onClick={() => handleClickInfo(member.id)}>
                Info
              </button>
              <button onClick={() => handleDelete(member.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
