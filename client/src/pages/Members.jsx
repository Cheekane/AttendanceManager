import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Members = () => {
  const [member, setMembers] = useState([])

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

  console.log(member);

// deletes a member with the id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/member/${id}`) // gets a member with id
      window.location.reload()
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
            <button className="memberInfo">
              <Link to={`/memberInfo/${member.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                Info
              </Link>
            </button>

            <p>Membership: {member.membership}</p>
            <p>Age: {member.age}</p>

            <button className="delete" onClick={() => handleDelete(member.id)}>Delete</button>
            <button className="update">
              <Link to={`/update/${member.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new member
        </Link>
      </button>
    </div>
  )
}

export default Members;