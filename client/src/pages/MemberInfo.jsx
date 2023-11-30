import axios from "axios"
import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const MemberInfo = () => {
    const [member, setMember] = useState()

    useEffect(() => {
        const fetchAllMember = async () => {
            try {
                const res = await axios.get("http://localhost:8800/member")
                setMember(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllMember()
    }, [])

    console.log(member)

    return (
        <div>
            <h1>Information</h1>

        </div>
    )
}