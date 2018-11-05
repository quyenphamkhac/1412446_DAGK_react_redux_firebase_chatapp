import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';
import { compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const firebaseConfig = {
  apiKey: "AIzaSyB68-QsZrMcVg7bRlvGFQ2E9RR5v_dFESs",
  authDomain: "react-firebase-chatapp.firebaseapp.com",
  databaseURL: "https://react-firebase-chatapp.firebaseio.com",
  projectId: "react-firebase-chatapp",
  storageBucket: "react-firebase-chatapp.appspot.com",
  messagingSenderId: "859490043085"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
)(createStore)

const initialState = {};

export default function configureStore() {
  console.log("Hello Redux-observable !");
  const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);
  return store;
}