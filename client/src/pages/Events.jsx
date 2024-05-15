import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header.jsx"
import "./Events.scss"

const Events = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    return (
        <div className="container">
            <Header/>
        </div>
    )

}

export default Events;