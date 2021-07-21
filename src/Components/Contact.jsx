import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/esm/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import EditForm from '../Components/EditForm'

const Contact=({ contact, handleDeleteContact, handleEditContact}) => {

  
    const [show, setshow]= useState(false);
    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);
    const deleteHandle = (e) => {
        handleDeleteContact(contact.id)
    }
    return (
        <>
        <Card className="contact col-md-3"> 
          <Card.Header>Name: {contact.Name}</Card.Header>
          <ListGroup variant="flush">
          <ListGroup.Item>Phone: {contact.Phone}</ListGroup.Item>
          <ListGroup.Item>Location: {contact.Location}</ListGroup.Item>
          </ListGroup>
          <Button onClick={deleteHandle}>Delete</Button><br />
          <Button onClick={handleShow}>Edit</Button>
          </Card>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <EditForm 
              contact={contact}
              handleEditContact={handleEditContact}
              closeModal={handleClose}
              />
              </Modal.Body>
          </Modal>
        </>
    )
}

export default Contact;