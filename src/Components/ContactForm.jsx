import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name : '',
            number : '',
            loction : '',
        }
    }

     
  
    handleChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value})
    };


    handleSubmit = (e)=> {
        e.preventDefault()
        this.props.addContact(this.state)
        this.setState({
            name : "",
            number : "",
            location: "",
        })

        
       
        
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" name="name" value={this.state.name} 
                    placeholder="Your Name" onChange={this.handleChange}/><br/>
                    <label htmlFor="number">Phone Number</label><br/>
                    <input type="tel" name="number" value={this.state.number} 
                    onChange={this.handleChange} placeholder="Number"/><br/>
                    <label htmlFor="location">Location</label><br/>
                    <input type="text" name="location" value={this.state.location} 
                    onChange={this.handleChange} placeholder="Your Location"/>
                     <Button variant="primary" type="submit">Add To Contact</Button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
