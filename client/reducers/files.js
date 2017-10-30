import {
  UPLOAD_DOCUMENT_SUCCESS,
  UPLOAD_DOCUMENT_FAIL,
} from '../actions/actionsTypes'

const initialState = [];

const files = (state = initialState, action) => {

  switch (action.type) {

    case UPLOAD_DOCUMENT_SUCCESS:
      return { isSuccessUpload: true };

    case UPLOAD_DOCUMENT_FAIL:
      return { isSuccessUpload: false };

    default: return state
  }
};

export default files
