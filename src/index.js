import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './containers/MainApp';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
