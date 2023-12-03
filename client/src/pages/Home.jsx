import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import SearchBar from "../components/SearchBar"

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

  return (
    <div>
      <h1>Members</h1>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="members">
        {members.map((member) => (
          <div key={member.id} className="member">
            <h2>{member.firstname} {member.lastname}</h2>
            <button className="memberInfo" onClick={() => handleClickInfo(member.id)}>
              Info
            </button>
            <button className="delete" onClick={() => handleDelete(member.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="button__add" onClick={handleClickAdd}>
        Add New Member
      </button>
    </div>
  )
}

export default Members
