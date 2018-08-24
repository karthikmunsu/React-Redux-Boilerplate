import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
