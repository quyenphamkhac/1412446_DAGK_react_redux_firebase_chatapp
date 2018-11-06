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
  const { data, presence, sessions } = props;
  const onlines = !isLoaded(presence) ? null : presence;
  const userSessions = !isLoaded(sessions) ? null : sessions;
  const friendList = userSessions && onlines && data && Object.keys(data).map((key, id) => (
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
  ]),
  connect(({ firebase: { data } }) => ({ 
    presence: data.presence,
    sessions: data.sessions,
  }))
)(friends);