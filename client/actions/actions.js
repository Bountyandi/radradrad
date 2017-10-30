import * as types from './actionsTypes'


export const setCandidates = ( candidates ) => {
  return {
    type: types.SET_CANDIDATES,
    candidates
  }
};

export const putCandidate = (candidate) => {
  return {
    type: types.PUT_CANDIDATE,
    candidate
  }
};

export const deleteCandidate = (_id) => {
  return {
    type: types.DELETE_CANDIDATE,
    _id
  }
};

export const uploadSuccess = () => {
  return {
    type: types.UPLOAD_DOCUMENT_SUCCESS
  }
};

export const uploadFail = () => {
  return {
    type: types.UPLOAD_DOCUMENT_FAIL
  }
};
