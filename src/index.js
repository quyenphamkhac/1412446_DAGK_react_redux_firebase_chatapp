import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './containers/MainApp';
import { Provider } from 'react-redux';
import { configureStoreWithFirebase } from './redux/configureStore';

import * as serviceWorker from './serviceWorker';

const store = configureStoreWithFirebase();

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
