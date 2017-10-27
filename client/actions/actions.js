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

export function uploadSuccess({ data }) {
  return {
    type: types.UPLOAD_DOCUMENT_SUCCESS,
    data,
  };
}

export function uploadFail(error) {
  return {
    type: types.UPLOAD_DOCUMENT_FAIL,
    error,
  };
}
