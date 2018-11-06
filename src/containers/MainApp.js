import React, { Component } from 'react';

//app router;
import LoginTemplate from '../components/templates/LoginTemplate';
import ChatAppTemplate from '../components/templates/ChatAppTemplate';

//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

class MainApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginTemplate} />
            <Route path="/app" component={ChatAppTemplate} />  
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainApp;