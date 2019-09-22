import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DataContext from './context/ContextContainer';

function AddItem(){

    const [displayModal, updateDisplayModal] = useState(false);
    const [input, updateInput] = useState('');
    const dataContext = useContext(DataContext)
    console.log(dataContext)

    const handleAdd = () => {
        
        updateDisplayModal(false);
        // updateData(value.push(input))
        // props.dispatch(handleAddItem({ name: input }));
        updateInput('');
    };

    const handleClose = () => {
        updateDisplayModal(false);
        updateInput('');
    };

    const handleChange = (event) => {
        updateInput(event.target.value);
    };

    const handleDisplayModal = () => {
        updateDisplayModal(true);
    };

    const renderModal = () => {
        return (
            <Modal 
                onHide={()=>{handleClose()}}
                show={displayModal} 
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>What item would you like to add?</p>
                    <input placeholder="Type in item here..." onChange={(event)=>handleChange(event)}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {()=>handleClose()}>Close</Button>
                    <Button variant="primary" type="submit" onClick={()=>handleAdd()}>Add Item</Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return (
        <div>
            {renderModal()}
            <Button variant="success" onClick={()=>handleDisplayModal()}>
                <i className="fas fa-plus-circle"></i>
            </Button>
        </div>);
};

export default AddItem