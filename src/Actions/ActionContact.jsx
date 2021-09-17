export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT"
export const DELETE_CONTACT ="DELETE_CONTACT"


export const addContact=(contact)=>{
    contact.id = Math.random().toString()

    return (dispatch,state,{getFirestore})=>{
         const db = getFirestore();
         db.collection("contacts").add(contact).then(
            (docs)=>{
                console.log(docs)
            })

         .catch((err) => console.log(err));

         
        // type: "ADD_CONTACT",
        // payload: contact
    

    }
}


export const editContact = (updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}


export const deleteContact = (contact_id) => {
    return {
        type: "DELETE_CONTACT",
        payload: contact_id
    }
}
