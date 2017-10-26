import { combineReducers } from 'redux';
import files from './files';
import candidates from './candidates';


export default combineReducers({
  files,
  candidates
});
