import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
       name: "Maya",
       number: "050000000",
       location: "Anagkazo",
       id: "8973723",
      }
    ],
    };
  }
  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contact: [...this.state.contact, newContact],
    });
  };

  handleDeleteContact = (contactsId) => {
    const newArr = this.state.contact.filter((contacts) => {
      return contacts.id !== contactsId;
    });
    this.setState({ contact: newArr });
  };
  handleEditContact=(updatedContacts)=>{
  this.setState({
    contact: this.state.contact.map((contacts) =>
    contacts.id === updatedContacts.id ? updatedContacts : contacts 
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
            contact={this.state.contact} 
            handleDeleteContact={this.handleDeleteContact}
            handleEditContact={this.handleEditContact}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}