import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "../components/SearchBar.jsx"
import SearchResults from "../components/SearchResults.jsx"
import "./Home.scss"

const Members = () => {
  const [members, setMembers] = useState([])
  const navigate = useNavigate()

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

  const handleClickInfo = (id) => {
    navigate(`/memberInfo/${id}`)
  }

  const handleClickAdd = () => {
    navigate("/add");
  }

  const [results, setResults] = useState([]) // connects the stateful variable to the search bar and search results components

  return (
    <div className="main-container">
      <h1 className="header">MEMBERS</h1>
      <div className="nagivation">

      </div>
      <button className="button__add" onClick={handleClickAdd}>
        Add New Member
      </button>
      <div className="searchbar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
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
  )
}

export default Members
