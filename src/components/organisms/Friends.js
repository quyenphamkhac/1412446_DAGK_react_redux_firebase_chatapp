import React from 'react';
import Friend from '../molecules/Friend';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

import { connect } from 'react-redux';
import moment from 'moment';

const getLastOnlineTime = (uid, sessions) => {
  const sessionsByUid = Object.keys(sessions).filter(key => sessions[key].user === uid);
  const lastSessionByUid = sessions[sessionsByUid[sessionsByUid.length - 1]];
  const relativeTime = moment(lastSessionByUid.endedAt).fromNow();
  return relativeTime;
}

const friends = (props) => {
  const { data, presence, sessions, stars, auth, search } = props;
  const onlines = !isLoaded(presence) ? null : presence;
  const userSessions = !isLoaded(sessions) ? null : sessions;
  const me = !isLoaded(auth) ? null : auth;
  const favorites = !isLoaded(stars) ? null : stars;

  //sort list user by condition
  //1. my stars list
  let myStars = favorites && me && favorites[me.uid] && Object.keys(favorites[me.uid]).filter(key => {
    return favorites[me.uid][key] === true;
  });
  myStars = myStars ? myStars : [];

  //2. onlines list
  let myOnlFriends = onlines && Object.keys(onlines);
  myOnlFriends = myOnlFriends ? myOnlFriends : [];

  //3. merge stars and online list
  let highPriority = myStars && myOnlFriends && Array.from(new Set([...myStars, ...myOnlFriends]));

  //4. get low priority user and sort by alphabet
  let lowPriority = me && data && highPriority && Object.keys(data)
    .filter(user => !highPriority.includes(user) && user !== me.uid)
    .sort((u1, u2) => (data[u1].displayName > data[u2].displayName));
  lowPriority = lowPriority ? lowPriority : [];

  //5. merge low and high
  let friends = [...highPriority, ...lowPriority];

  const friendList = userSessions && onlines && friends && data && me && friends
    .filter(user => {
      let isMatch = true;
      if(search) {
        isMatch = data[user].displayName.toLowerCase().includes(search.toLowerCase());
      }
      return user !== me.uid && isMatch;
    })
    .map((key) => (
      <Friend 
        key={key} 
        uid={key} 
        name={data[key].displayName} 
        online={onlines[key] === true}
        avatar={data[key].avatarUrl}
        status={onlines[key] === true ? "online" : getLastOnlineTime(key, userSessions)}
      />
    )
  );

  return (
    <ul className="list">
      {friendList}
    </ul>
  )
}

export default compose(
  firebaseConnect([
    'presence',
    'sessions',
    'stars',
  ]),
  connect(({ firebase: { data, auth } }) => ({ 
    presence: data.presence,
    sessions: data.sessions,
    stars: data.stars,
    auth,
  }))
)(friends);