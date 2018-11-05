import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import { app, googleProvider } from '../../firebase/firebase';
import { from } from 'rxjs';

import { setItem } from '../../utils/LocalStorage';

//actions
export const GOOGLE_AUTH_LOGIN = 'GOOGLE_AUTH_LOGIN';
export const GOOGLE_AUTH_LOGOUT = 'GOOGLE_AUTH_LOGOUT';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';

//action creator
export const loginWithGoogle = () => ({ type: GOOGLE_AUTH_LOGIN, });
export const logoutWithGoogle = () => ({ type: GOOGLE_AUTH_LOGOUT });
const loginWithGoogleSuccess = (payload) => ({ type: GOOGLE_LOGIN_SUCCESS, payload });

//epic
export const loginEpic = action$ => action$.pipe(
  ofType(GOOGLE_AUTH_LOGIN),
  switchMap(() => from(app.auth().signInWithPopup(googleProvider)).pipe(
    map(response => {
      const { user, additionalUserInfo } = response;
      const authUser = {
        profile: additionalUserInfo.profile,
        uid: user.uid,
      };
      setItem("auth", authUser);
      return loginWithGoogleSuccess(authUser);
    }),
  )
  ),
);

//reducer
const defaultState = {
  authUser: null,
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      const authUser = action.payload;
      return {
        ...state,
        authUser,
      }
    default:
      return state;
  }
}

export default auth;