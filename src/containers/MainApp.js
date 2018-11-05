import React, { Component } from 'react';

//@reach/router
import { Router } from '@reach/router';

//redux
import { connect } from 'react-redux';

//app router
import ChatAppTemplate from '../components/templates/ChatAppTemplate';

class MainApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <ChatAppTemplate path="/" />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.authUser,
  }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(MainApp);