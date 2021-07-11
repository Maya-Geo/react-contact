import React, { Component } from 'react';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ contacts :[]}
  }

  
  handleAddContact = (newContact) => {
    this.setState({ 
        contacts: [...this.state.contacts,newContact] 
    })
  }


  render() {
   
    const contacts = this.state.contacts.map((contacts,index) =>{
            return(
              <Contact contact={contacts} index={index}/>
            )
    })



    return (
      <>
         <ContactForm addContact={this.handleAddContact}/>
         {contacts}
      </>
    );
  }
}

export default App;
