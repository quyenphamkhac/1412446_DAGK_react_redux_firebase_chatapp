import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// import auth, { loginEpic } from './auth';

export const rootEpic = combineEpics(
  // loginEpic
);

export const rootReducer = combineReducers({
  // auth
  firbase: firebaseReducer,
});