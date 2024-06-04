import React, { useState } from 'react'
import Modal from 'react-modal'
import { UsersRound, X } from 'lucide-react'
import './styles/AddNewPerson.scss'

Modal.setAppElement('#root')

const AddNewPerson = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
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
                    <X className='modal-close' onClick={closeModal}/>
                    <form className='modal-form'>
                        <div className='input-wrapper'>
                            <label>Firstname</label>
                            <input 
                                type='text'
                                id='firstname'
                                placeholder='Firstname'
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Lastname</label>
                            <input 
                                type='text'
                                id='lastname'
                                placeholder='Lastname'
                                required
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label>Select Group</label>
                            <select id='group'>
                                <option value={'Elementary School'}>Elementary</option>
                                <option value={'High School'}>High School</option>
                                <option value={'College/University'}>College/University</option>
                                <option value={'Adult'}>Adult</option>
                            </select>
                        </div>
                        <div className='input-wrapper'>
                            <label>Phone Number</label>
                            <input 
                                type='tel'
                                id='cellnumber'
                                placeholder='Phone number'
                                required
                            />
                        </div>
                        <div className='button-wrapper'>
                            <button className='modal-cancel-button' onClick={() => {setIsOpen(false)}}>Cancel</button>
                            <button className='modal-add-button'>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddNewPerson