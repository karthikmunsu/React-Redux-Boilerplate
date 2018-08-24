import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.././reducers/index';

export default function configureStore() {
  console.log('store');
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
};
