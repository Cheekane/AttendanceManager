import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Members = () => {
  const [member, setMembers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/members") // gets the data from the members port
        setMembers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllMembers()
  }, [])

  console.log(member)

  // deletes a member with the id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/member/${id}`) // gets a member with id
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickInfo = async (id) => {
    try {
      member.map((member) => (
        navigate(`/memberInfo/${id}`)
      ))
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickAdd = async () => {
    try {
      navigate("/add")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Members</h1>
      <div className="members">
        {member.map((member) => (
          <div key={member.id} className="member">
            <h2>{member.firstname} {member.lastname}</h2>
            <button className="memberInfo" onClick={() => handleClickInfo(member.id)}>Info</button>
            <button className="delete" onClick={() => handleDelete(member.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className="button__add" onClick={handleClickAdd}>Add New Member</button>
    </div>
  )
}

export default Members;