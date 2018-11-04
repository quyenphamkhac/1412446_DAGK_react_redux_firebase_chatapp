import React, { Component } from 'react';

//@reach/router
import { Router, navigate } from '@reach/router';

//redux
import { connect } from 'react-redux';

//app router
import LoginPage from '../components/pages/LoginPage';
import UpdateProfile from '../components/pages/UpdateProfile';
import ChatApp from '../components/pages/ChatApp';

class MainApp extends Component {
    componentDidUpdate(prevProps) {
        if(prevProps.authUser !== this.props.authUser) {
            navigate(`/app/update_profile`);
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <LoginPage path="/" />
                    <UpdateProfile path="app/update_profile" />
                    <ChatApp path="/app/chat" />
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