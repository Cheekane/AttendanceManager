import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import NavigationBar from "../components/NavigationBar.jsx"
import "./Events.scss"

const Events = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    return (
        <div className="main-container">
            <NavigationBar />
        </div>
    )

}

export default Events;