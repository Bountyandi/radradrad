import API from './helpers/api';
import { downloadFile } from './helpers/downloadFile';
import {
  setCandidates,
  putCandidate,
  deleteCandidate,
  uploadSuccess,
  uploadFail
} from './actions';


export const fetchCandidates = () => {
  let url = '/api/candidates/';

  return dispatch => {
    API.get(url)
      .then(data => dispatch(setCandidates(data.candidates)))
  }
};

export const updateCandidate = ( candidate ) => {
  let url = '/api/candidates/';

  return dispatch => {
    API.put(url, candidate)
      .then( data => dispatch(putCandidate(data)))
  }
};

export const removeCandidate = ( data ) => {
  let url = '/api/candidates/';

  return dispatch => {
    API.delete(url, data)
      .then( res => dispatch(
        deleteCandidate(res)
    ))
  }
};

export const getFile = (data) => {
  let url = `/api/generateFile/${data}`;

  return dispatch => {
    API.get(url)
      .then( resp => downloadFile({
        filename: resp.filename,
        downloadAction: resp.downloadAction
      }))
  }
};

export const uploadFile = ({ form }) => {
  var data = new FormData(form);
  let url = '/api/uploadFile/';

  return dispatch => {
    fetch('/api/uploadFile/', {
      method: 'post',
      body: data
    })
    .then(res => {
      res.json()
        .then( data => {
          dispatch(uploadSuccess());
          dispatch(setCandidates(data.candidates));
        })
        .catch(err => dispatch(uploadFail()))
    })
    .catch(err => dispatch(uploadFail()))
  }
};
