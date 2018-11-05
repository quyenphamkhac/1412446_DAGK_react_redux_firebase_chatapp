import React, { Component } from 'react';

//app router;
import LoginTemplate from '../components/templates/LoginTemplate';

class MainApp extends Component {
  render() {
    return (
      <div>
        <LoginTemplate />
      </div>
    );
  }
}

export default MainApp;