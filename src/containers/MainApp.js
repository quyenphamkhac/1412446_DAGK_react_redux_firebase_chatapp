import React, { Component } from 'react';

//@reach/router
import { Router } from '@reach/router';

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

export default MainApp;