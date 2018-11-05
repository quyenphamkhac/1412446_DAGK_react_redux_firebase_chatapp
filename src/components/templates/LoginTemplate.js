import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

class LoginTemplate extends Component {
  render() {
    const { todos } = this.props;
    const todosList = !isLoaded(todos)
    ? 'Loading'
    : isEmpty(todos)
      ? 'Todo list is empty'
      : Object.keys(todos).map(
          (key, id) => (
            <div key={key} id={id}>{id} {todos[key]}</div>
          )
        )
    return (
      <div style={{color: 'black'}}>
        <h1>Todos</h1>
        {todosList}
      </div>
    );
  }
}
export default compose(
  firebaseConnect([
    'todos' 
  ]),
  connect((state) => ({
    todos: state.firebase.data.todos,
  }))
)(LoginTemplate)