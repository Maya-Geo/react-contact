const initialState = {
    contacts: [
        {
          name: "Maya",
          number: "050000000",
          location: "Anagkazo",
          id: Math.random().toString()
        },

        {
            name: "Liti",
            number: "02000000",
            location: "Lees",
            id: Math.random().toString()
          }

        
       
      ]
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return  { ...state.contacts, contacts: [...state.contacts, action.payload] };


            case "EDIT_CONTACT":
             const newContacts = state.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
          )


          return {...state, contacts: newContacts};
    
          case "DELETE_CONTACT":
            const contactSaved = state.contacts.filter((contact) => {
              return contact.id !== action.payload;
            }); 
            return {...state, contacts: contactSaved};





    
        default:
            return state;
    }
} 

export default contactReducer