import React, { Component } from 'react';
import { editContact} from "../Actions/ActionContact";
import {connect} from "react-redux";
import { Button } from 'react-bootstrap';


class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state={
                    Name: props.contact.Name || '',
                     Phone: props.contact.Phone||'',
                     Location: props.contact.Location||'',
                    id: props.contact.id || '',
                }
    };

    handleChange= (e) => {
     this.setState({ [name] :value })
     const target = e.target;
     const value = target.value;
     const name = target.name;
    };


    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handeEditContact(this.state);
        this.setState({

        });
        this.props.closeModal();
        alert("Contact edited")
    }
    render() {
        return (
            <>
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
            </>
        )
    }
}


const mapDispatchToProps = {
    editContact: editContact
  }
export default  connect(null, mapDispatchToProps) (EditForm);
