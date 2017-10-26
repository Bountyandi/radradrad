import API from './helpers/api';
import {
  setCandidates,
  putCandidate,
  deleteCandidate,
  uploadSuccess,
  uploadFail,
} from './actions';


export const fetchCandidates = () => {
  let url = '/api/candidates/';
  return dispatch => {
    API.get(url)
      .then(data => dispatch(setCandidates(data.candidates)) )
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
      .then( res => {
        debugger
          dispatch(deleteCandidate(res))
        }
      )
  }
};


export const uploadFile = ( file, name ) => {
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);


  debugger

  //const config = {
  //  headers: {
  //    'Content-Type': undefined//'multipart/form-data'
  //  }
  //};


  var myHeaders = new Headers({
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    //"Content-Type": "multipart/form-data",
    //'Content-Length': file.size,
    //"X-Custom-Header": "ProcessThisImmediately",
  });

  return dispatch => {
    fetch('/uploadFile/', {
      method: 'post',
      body: file,
      //headers: myHeaders
    })
      .then(res => {
        console.log(res)
      })
      //dispatch(uploadSuccess(res)) })
      .catch(err => dispatch(uploadFail(err)))
  }
};
