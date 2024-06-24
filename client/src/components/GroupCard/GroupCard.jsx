import React from "react"
import "./GroupCard.scss"
import axios from "axios"
import { BarChartBig, Pencil, Trash2 } from "lucide-react"

const GroupCard = ({ groups, handleRemoveClick }) => {
    const renderGroups = () => {
        return groups.map((group) => (
            <div className="card-section" key={group.groupName}>
                <h2 className="group-name">{group.groupName}</h2>
                <Trash2
                    className="remove-group-button"
                    onClick={() => handleRemoveClick(group.groupName)}
                />
                <div className="group-card-description-section">
                    <p className="group-description">{group.description}</p>
                </div>
                <button className="stats-group-button">
                    <BarChartBig />
                </button>
                <button className="edit-group-button">
                    <Pencil />
                </button>
            </div>
        ))
    }

    return <div className="group-card-container">{renderGroups()}</div>
}

export default GroupCard
