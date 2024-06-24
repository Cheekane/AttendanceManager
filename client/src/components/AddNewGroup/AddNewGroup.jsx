import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from "axios"
import { CopyPlus, X } from 'lucide-react'
import { Toaster, toast } from 'sonner'
import './AddNewGroup.scss'

Modal.setAppElement('#root')

const AddNewGroup = ({ addGroup }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setGroup(initialFormData)
        setIsOpen(false)
    }

    const initialFormData = {
        groupName:"",
        description:""
    }

    const [group, setGroup] = useState(initialFormData)
    const [charCount, setCharCount] = useState(0)
    const maxChars = 450

    const handleChange = (event) => {
        const { id, value } = event.target
        if (id === 'description') {
            if (value.length <= maxChars) {
                setCharCount(value.length)
            }
        }
        setGroup({
            ...group,
            [id]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        try {
            // Add the new group
            await addGroup(group)
            closeModal()
        } catch (error) {
            setGroup(initialFormData)
            console.error('Failed to add group:', error)
        }
    }

    return (
        <div className="add-group-container">
            <button className="add-group" type="button" onClick={openModal}>
                <CopyPlus />
            </button>
            <Modal
                className='modal-add'
                overlayClassName="modal-overlay"
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className='modal-input-container'>
                    <h2 className='subtitle'>Add New Group</h2>
                    <X className='modal-close' onClick={closeModal} />
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <div className='input-wrapper'>
                            <label>Group Name</label>
                            <input 
                                type='text'
                                id='groupName'
                                value={group.groupName}
                                placeholder='Group Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='description-wrapper'>
                            <label>Group Description</label>
                            <textarea 
                                id='description'
                                value={group.description}
                                placeholder='Group Description'
                                onChange={handleChange}
                                maxLength={maxChars}
                            />
                            <div className='char-count'>
                                {charCount}/{maxChars} characters
                            </div>
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

export default AddNewGroup