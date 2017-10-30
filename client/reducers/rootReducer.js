import { combineReducers } from 'redux';
import uploadState from './uploadState';
import candidates from './candidates';


export default combineReducers({
  uploadState,
  candidates
});
