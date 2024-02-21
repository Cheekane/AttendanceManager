import { useNavigate } from "react-router-dom"
import "./NavigationBar.scss"

const NavigationBar = () => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        if (id == 0) {
            navigate(`/home`)
        } else if (id == 1) {
            navigate(`/events`)
        } else if (id == 2) {
            navigate(`/leadership`)
        } else if (id == 3) {
            navigate(`/contacts`)
        }
    }

    return (
        <div className="navigation-menu">
            <ul>
                <li><a onClick={() => handleClick(0)}>Home</a></li>
                <li><a onClick={() => handleClick(1)}>Events</a></li>
                <li><a onClick={() => handleClick(2)}>Leadership</a></li>
                <li><a onClick={() => handleClick(3)}>Contacts</a></li>
            </ul>
        </div>
    )
}

export default NavigationBar