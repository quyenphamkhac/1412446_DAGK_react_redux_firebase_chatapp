import React, { Component } from 'react';

import { database } from '../../firebase/firebase';
import { getItem } from '../../utils/LocalStorage';
import { navigate } from '@reach/router';


class UpdateProfile extends Component {

  updateProfile = () => {
    const { uid, profile } = getItem("auth");
    console.log("uid", uid);
    database.ref(`users/${uid}`).set({
      name: profile.name,
      email: profile.email,
      isOnline: true,
      avatar: profile.picture,
      lastLoginTime: new Date().getTime(),
      uid: uid,
    }, function (error) {
      if (error) {
        console.log("[error]", error);
      } else {
        console.log("[save success]");
        navigate(`/app/chat`)
      }
    })
  }

  render() {
    return (
      <div>
        Update Profile Page
        <button
          onClick={this.updateProfile}
        >
          Update
        </button>
      </div>
    );
  }
}

export default UpdateProfile;