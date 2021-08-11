const initialState = {
    contacts: [
        {
          name: "Maya",
          phoneNumber: "0050000000",
          location: "Anagkazo",
          id:  "8973723",
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