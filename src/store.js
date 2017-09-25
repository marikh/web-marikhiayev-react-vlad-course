import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default createStore(rootReducer, applyMiddleware(logger,thunk));