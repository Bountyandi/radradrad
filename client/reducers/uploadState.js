import Immutable from 'immutable'
import {
  UPLOAD_DOCUMENT_SUCCESS,
  UPLOAD_DOCUMENT_FAIL,
} from '../actions/actionsTypes'

const initialState = false;

const uploadState = (state = initialState, action) => {

  switch (action.type) {
    case UPLOAD_DOCUMENT_SUCCESS:
      return true;

    case UPLOAD_DOCUMENT_FAIL:
      return false;

    default: return state;
  }
};

export default uploadState
