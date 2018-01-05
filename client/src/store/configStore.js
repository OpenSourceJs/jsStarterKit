import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reduxpromise from 'redux-promise';
import rootReducer from '../reducers/rootReducer.js';

const configStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, Reduxpromise, logger))
  );
};

export default configStore;
