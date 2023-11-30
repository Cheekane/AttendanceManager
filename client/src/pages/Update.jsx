import axios from "axios"
import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Update = () => {
    const [member, setMember] = useState({
        firstname:"",
        lastname:"",
        membership:"",
        age:""
    })

    const navigate = useNavigate()
    const location = useLocation()

    const memberId = location.pathname.split("/")[2] // splits and gets the memberId from localhost:3000/update/:id <- as "id" (index 2)

    const handleChange = (event) => {
        setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleClick = async (event) => {
        event.preventDefault() // to prevent default page refresh

        try {
            await axios.put(`http://localhost:8800/member/${memberId}`, member)
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(member)

    return (
        <div className="form">
            <h1>Update Member</h1>
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="firstname" 
            name="firstname" 
            />
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="lastname" 
            name="lastname" 
            />
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="membership" 
            name="membership" 
            />
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="age" 
            name="age" 
            />
            <button className="formButton" onClick={handleClick}>Update</button>

            <button className="">
                <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            </button>
        </div>
    )
}

export default Update