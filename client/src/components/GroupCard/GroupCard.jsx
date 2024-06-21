import React, { useState, useEffect } from 'react'
import './GroupCard.scss'
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react'

const GroupCard = () => {
    const [tables, setTables] = useState({});

    const handleRemoveClick = async (tableName) => {
        try {
            await axios.delete(`http://localhost:8800/group/${tableName}`)
            fetchData()
        } catch (error) {
            console.error(`Failed to delete group`)
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:8800/groups')
            setTables(data);
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='group-card-container'>
            {Object.keys(tables).map(tableName => (
                <div className='card-section'>
                    <h2 className='group-name' key={tableName}>{tableName.charAt(0).toUpperCase() + tableName.slice(1)}</h2>
                    <Trash2 className='remove-group-button' key={tableName} onClick={() => handleRemoveClick(tableName)}/>
                    <p className='group-description'>{tables[tableName].description}</p>
                    <div className='card-body-section'>
                        <button className='edit-group-button'>
                            <Pencil/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GroupCard