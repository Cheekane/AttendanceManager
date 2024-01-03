import axios from "axios"
import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom'

const MemberInfo = () => {
    const [member, setMember] = useState({})

    const navigate = useNavigate()
    const location = useLocation()
    const memberId = location.pathname.split("/")[2] // gets the member id

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/member/${memberId}`)
                setMember(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMember()
    }, [memberId]) // dependency on the member id to change state
    
    console.log(member)
    
    const handleChange = async (event) => {
        setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleClickUpdate = async (event) => {
        event.preventDefault()

        try {
            await axios.put(`http://localhost:8800/member/${memberId}`, member)
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

    return (
        <div>
            <h1>Information</h1>
                <div className="form">
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="first name" 
                        name="firstname" 
                        value={member.firstname}
                    />
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="last name" 
                        name="lastname" 
                        value={member.lastname}
                    />
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="membership" 
                        name="membership"  
                        value={member.membership}
                    />
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        placeholder="age" 
                        name="age" 
                        value={member.age}
                    />
                    <button className="button__update" onClick={handleClickUpdate}>Update</button>
                    <button className="button__home" onClick={handleClickHome}>Home</button>
                </div>
                
        </div>
    )
}

export default MemberInfo