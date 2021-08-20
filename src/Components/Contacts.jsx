import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/esm/Modal';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import EditForm from '../Components/EditForm'

const Contacts=({ contact, deleteContact, editContact}) => {


    const [show, setshow]= useState(false);
    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);
    const handleDelete = (e) => {
       deleteContact(contact.id);
      
    }


    return (
        <>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <EditForm 
              contact={contact}
              editContact={editContact}
              closeModal={handleClose}
              />
              </Modal.Body>
          </Modal>

          <Card className="contact col-md-3"> 
          <Card.Header>Name: {contact.Name}</Card.Header>
          <ListGroup variant="flush">
          <ListGroup.Item>Phone: {contact.Phone}</ListGroup.Item>
          <ListGroup.Item>Location: {contact.Location}</ListGroup.Item>
          </ListGroup>
          <Button onClick={handleDelete}>Delete</Button><br />
          <Button onClick={handleShow}>Edit</Button>
          </Card>
        </>
    )
}

export default Contacts;