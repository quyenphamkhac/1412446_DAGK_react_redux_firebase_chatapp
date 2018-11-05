import { combineEpics } from 'redux-observable';
import { getFirebase } from 'react-redux-firebase';

export const rootEpic = (...args) => combineEpics(
)(...args, getFirebase) ;