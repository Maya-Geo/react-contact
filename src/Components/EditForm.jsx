import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
                    Name: props.contact.Name || '',
                    Phone: props.contact.Phone||'',
                    Location: props.contact.Location||'',
                    id: props.contact.id || '',
                }
    };
    handleChange=(e)=>{
     this.setState({[e.target.name] : e.target.value})
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleEditContact(this.state);
        this.setState({
        });
        this.props.closeModal();
    }
    render() {
        return (
            <>
     <Form onSubmit={this.handleSubmit}>
         <Form.Group controlId="formBasicName">
         <Form.Label htmlFor="name">Name</Form.Label>
         <Form.Control type="text" name="Name" htmlFor="Name"
         placeholder="Name" className="input"
         onChange={this.handleChange} 
         value={this.state.Name} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicNumber">
          <Form.Label htmlFor="Number">Phone</Form.Label>
         <Form.Control type="number" name="Phone" htmlFor="Phone"
         className="input"
         placeholder="Phone"
         onChange={this.handleChange} 
         value={this.state.Phone} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicLocation">
             <Form.Label htmlFor="Location"></Form.Label>
         <Form.Control type="text" name="Location" htmlFor="Location" 
         className="input"
         placeholder="Location" 
         onChange={this.handleChange} 
         value={this.state.Location} 
         />
         </Form.Group>
         <div className="form-control">
            <Button variant="primary" type="submit">Add To Contact</Button>
         </div>
     </Form>
            </>
        )
    }
}