const initialState = {
    contacts: [
        {
          name: "Maya",
          number: "050000000",
          location: "Anagkazo",
          id: Math.random().toString()
        },

        {
            name: "Maya",
            number: "050000000",
            location: "Anagkazo",
            id: Math.random().toString()
          }

        
       
      ]
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return state
    
        default:
            return state;
    }
}

export default contactReducer