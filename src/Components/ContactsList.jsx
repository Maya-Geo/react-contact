import React from "react";
import Contact from "./Contact";

export default function ContactsList( {contact, handleDeleteContact, handleEditContact}) {
  const contactsList = contact.map((contact) => {
    return (
    <Contact 
    contact={contact} 
    handleDeleteContact={handleDeleteContact}
    handleEditContact={handleEditContact}
    />
        );
  });
  return (
      <div>{contactsList}</div>
  )
}