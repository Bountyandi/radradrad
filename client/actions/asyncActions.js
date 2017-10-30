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
  debugger
  return dispatch => {
    API.get(url)
      .then(data => {
        debugger
        dispatch(setCandidates(data.candidates))
      })
  }
};

export const updateCandidate = ( candidate ) => {
  let url = '/api/candidates/';

  return dispatch => {
    API.put(url, candidate)
      .then( data =>
        dispatch(putCandidate(data))
      )
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

//export const uploadFile = ( file, name, form ) => {
export const uploadFile = ({ form }) => {
  //let data = new FormData();
  //data.append('file', document);
  //data.append('name', name);

  var data = new FormData(form);

  debugger
  return dispatch => {
    fetch('/api/uploadFile/', {
      method: 'post',
      body: data
    })
    .then(res => {
      debugger
      dispatch(uploadSuccess());
      dispatch(fetchCandidates());
    })
    .catch(err => dispatch(uploadFail()))
  }
};










