import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { firebaseReducer, reactReduxFirebase } from 'react-redux-firebase';
import { rootEpic } from './modules/root';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase from 'firebase';
import { firebaseConfig } from '../firebase/firebase';

const epicMiddleware = createEpicMiddleware();

firebase.initializeApp(firebaseConfig);

const config = {
  userProfile: 'users',
  enableLogging: false,
  presence: 'presence', 
  sessions: 'sessions',
}

const createStoreWithFirebase = composeWithDevTools(
  reactReduxFirebase(firebase, config)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer
});

export const configureStoreWithFirebase = (initialState = {}) => {
  const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(epicMiddleware)
    )
  );
  epicMiddleware.run(rootEpic);
  return store;
}