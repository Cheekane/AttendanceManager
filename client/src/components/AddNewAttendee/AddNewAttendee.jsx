import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from "axios"
import { UserRoundPlus, X } from 'lucide-react'
import './AddNewAttendee.scss'
import { Toaster, toast } from 'sonner'

Modal.setAppElement('#root')

const AddNewattendee = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setAttendee(initialFormData)
        setIsOpen(false)
    }

    const initialFormData = {
        firstname:"",
        lastname:"",
        category:"",
        email:"",
        phoneNumber:"",
    }

    const [attendee, setAttendee] = useState(initialFormData)

    const handleChange = (event) => {
        setAttendee({
            ...attendee,
            [event.target.id]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Check if the attendee already exists
            const { data: existingAttendee } = await axios.get("http://localhost:8800/attendee", {
                params: { firstname: attendee.firstname, lastname: attendee.lastname, email: attendee.email }
            })

            if (existingAttendee.length > 0) {
                toast.error(`${attendee.firstname} ${attendee.lastname} is already added`)
                setAttendee(initialFormData)
            } else {
                // Add the new attendee
                await axios.post("http://localhost:8800/attendee", attendee)
                toast.success(`Successfully added ${attendee.firstname} ${attendee.lastname}`)
                closeModal()
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(`Error: ${error.response.data.error}`)
            } else {
                console.error('Failed to add attendee:', error)
                toast.error('Failed to add attendee')
            }
        }
    }

    return (
        <div className="add-attendee-container">
            <button className="add-attendee" type="button" onClick={openModal}>
                <UserRoundPlus />
            </button>
            <Modal
                className='modal-add'
                overlayClassName="modal-overlay"
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className='modal-input-container'>
                    <h2 className='subtitle'>Add New Attendee</h2>
                    <X className='modal-close' onClick={closeModal} />
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <div className='input-wrapper'>
                            <label>First Name</label>
                            <input 
                                type='text'
                                id='firstname'
                                value={attendee.firstname}
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
                                value={attendee.lastname}
                                placeholder='Last Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Select Category</label>
                            <select 
                                id='category'
                                value={attendee.category}
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
                                value={attendee.email}
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
                                value={attendee.phoneNumber}
                                pattern="\d*"
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

export default AddNewattendee