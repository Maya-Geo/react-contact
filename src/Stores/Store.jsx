import ContactReducer from '../Reducer/ContactReducer';
import { createStore, compose, applyMiddleware} from "redux";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Firebase/Config"
// import firestore from "../Firebase/Config";


const Store= createStore(ContactReducer, compose(
applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
reduxFirestore(firebase),
reactReduxFirebase(firebase)

))

   
       

export default Store;
