import {
  uploadSuccess,
  uploadFail,
  //editTermino,
  //deleteTermino,
  //addTerminos,
} from './actions';

//import API from './helpers/api';

import axios from 'axios';

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

export const uploadFile2 = ( file, name ) => {
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  debugger

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  return dispatch => {
    axios.post('/uploadFile/', file, config)
      .then( res => {
        console.log(res)
      })
        //dispatch(uploadSuccess(res)) })
      .catch(err => dispatch(uploadFail(err)) )
  }
};


export const uploadFile3 = ( file, name ) => {
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  debugger

  return dispatch => {
    axios.post('/uploadFile', data)
      .then( res => {
        console.log(res)
      })
      //dispatch(uploadSuccess(res)) })
      .catch(err => dispatch(uploadFail(err)) )
  }
};
