import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import "./App.css";

export default class App extends Component {
  
  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleDeleteContact = (contactId) => {
    const newArr = this.state.contact.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({ contacts: newArr });
  };
  handleEditContact=(updatedContact)=>{
  this.setState({
    contacts: this.state.contacts.map((contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
    ),
  });
  };

  render() {
    return (
      <div className="list">
        <div className="container">
          <div className="row">
            <div className="col-md-6"><ContactForm 
            addContact={this.handleAddContact} 
            /></div>
            <div className="count col-md-4">
            <h1>All Contacts</h1>
            <ContactsList 

            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}