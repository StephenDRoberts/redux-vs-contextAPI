import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export const AddItem = () => {

    const [displayModal, updateDisplayModal] = useState(false)

    const handleAdd = () => {
        updateDisplayModal(false)
        console.log('added')
    }

    const handleClose = () => {
        updateDisplayModal(false)
        console.log('closed')
    }

    const renderModal = () => {
        if(displayModal===true){
        return (<Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>What item would you like to add?</p>
                <input placeholder="Type in item here..."/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {()=>handleClose()}>Close</Button>
                <Button variant="primary" onClick={()=>handleAdd()}>Add Item</Button>
            </Modal.Footer>
        </Modal.Dialog>)
        } 
    }

    return (
        <div>
            {renderModal()}
            <button onClick={()=>updateDisplayModal(true)}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>)
}