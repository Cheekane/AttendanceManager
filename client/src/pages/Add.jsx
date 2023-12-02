import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [member, setMember] = useState({
        firstname:"",
        lastname:"",
        membership:"",
        age:""
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleClick = async (event) => {
        event.preventDefault() // to prevent default page refresh
        
        try {
            await axios.post("http://localhost:8800/member", member)
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    const handleClickHome = async () => {
        try {
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(member)

    return (
        <div className="form">
            <h1>Add New Member</h1>
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="first name" 
            name="firstname" 
            />
            <input 
            type="text" 
            onChange={handleChange} 
            placeholder="last name" 
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
            <button className="button__add" onClick={handleClick}>Add</button>
            <button className="button__home" onClick={handleClickHome}>Home</button>
        </div>
    )
}

export default Add