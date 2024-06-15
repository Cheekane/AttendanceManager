import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from "axios"
import { UsersRound, X } from 'lucide-react'
import './styles/AddNewPerson.scss'

Modal.setAppElement('#root')

const AddNewPerson = ({ sendSonner }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setPerson(initialFormData)
        setIsOpen(false)
    }

    const initialFormData = {
        firstname:"",
        lastname:"",
        category:"",
        email:"",
        phoneNumber:"",
    }

    const [person, setPerson] = useState(initialFormData)

    const handleChange = (event) => {
        setPerson({
            ...person,
            [event.target.id]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        axios
        .post("http://localhost:8800/person", person)
        .then(
            sendSonner(person.firstname, person.lastname),
        )
        
    }

    return (
        <div className="add-person-container">
            <button className="add-person" type="button" onClick={openModal}>
                +&nbsp; <UsersRound />
            </button>
            <Modal
                className='modal-add'
                overlayClassName="modal-overlay"
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className='modal-input-container'>
                    <h2 className='subtitle'>Add New Person</h2>
                    <X className='modal-close' onClick={closeModal} />
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <div className='input-wrapper'>
                            <label>First Name</label>
                            <input 
                                type='text'
                                id='firstname'
                                value={person.firstname}
                                placeholder='First Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Last Name</label>
                            <input 
                                type='text'
                                id='lastname'
                                value={person.lastname}
                                placeholder='Last Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Select Category</label>
                            <select 
                                id='category'
                                value={person.category}
                                onChange={handleChange}
                                required
                            >
                                <option value={''}>Select Category</option>
                                <option value={'Elementary School'}>Elementary</option>
                                <option value={'High School'}>High School</option>
                                <option value={'College/University'}>College/University</option>
                                <option value={'Adult'}>Adult</option>
                            </select>
                        </div>
                        <div className='input-wrapper'>
                            <label>Email</label>
                            <input 
                                type='text'
                                id='email'
                                value={person.email}
                                placeholder='Email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Phone Number</label>
                            <input 
                                type='tel'
                                id='phoneNumber'
                                value={person.phoneNumber}
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='button-wrapper'>
                            <button className='modal-cancel-button' onClick={closeModal}>Cancel</button>
                            <button className='modal-add-button'>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddNewPerson