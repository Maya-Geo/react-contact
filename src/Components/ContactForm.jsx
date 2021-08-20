import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import {addContact} from "../Actions/ActionContact";


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
        const target = e.target;
        const value =target.value;
        const name =target.name;
    };


    handleSubmit = (e)=> {
        e.preventDefault()
        this.props.addNewContact(this.state)
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
                    <input type="text" name="name"  value={this.state.name} 
                    placeholder="Your Name" onChange={this.handleChange}/><br/>
                    
                    <label htmlFor="number">Number</label><br/>
                    <input type="text" name="number" value={this.state.number} 
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

  const mapDispatchToProps = {
      addNewContact : addContact

  }

export default connect(null, mapDispatchToProps)(ContactForm) ;
