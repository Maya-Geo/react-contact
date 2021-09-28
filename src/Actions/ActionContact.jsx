export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT"
export const DELETE_CONTACT ="DELETE_CONTACT"


export const addContact=(contact)=>{
    contact.id = Math.random().toString()




    return (dispatch,state,{getFirestore})=>{
         const db = getFirestore();
         db.collection("contacts")  .add({...contact, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then(
            (docs)=>{
                console.log(docs)
            })


         .catch((err) => console.log(err));

         
        // type: "ADD_CONTACT",
        // payload: contact
    

    }
}


export const editContact = (updatedContact) => {
    return (dispatch, state, {getFirestore})=>{
        getFirestore().collection("users").doc(updatedContact.id).set(updatedContact)
        .then(
            ()=> {
                console.log("Successfuly updated")
            }
        )
        .catch(
            (error)=> {
                console.error("Remove contacts", error);
            }
        )

        // type: "EDIT_CONTACT",
        // payload: updatedContact
    }
}


export const deleteContact = (id) => {
    return(dispatch, state, {getFirestore})=>{
        
        getFirestore().collection("contacts").doc(id).delete().then(() => {
          console.log("Contacts deleted");
      }).catch((error) => {
          console.error("Removed Contacts: ", error);
      });
  }

      
        // type: "DELETE_CONTACT",
        // payload: contact_id
    }



export const getAllContacts = () => {
    return(dispatch, state, {getFirestore}) =>{
      getFirestore().collection("contacts").onSnapshot((snapshot)=>{
        let contacts= [];
        snapshot.forEach
        ((doc) =>{
          contacts.push({...doc.data(),id:doc.id}) //added an id(contact added)//
          
          
        })
        
      dispatch({
        type: "SET_ALL_CONTACTS",
        payload: contacts
      })
      },(error)=>{});
  
    };
  };



