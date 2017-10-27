import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import jsonfile from 'jsonfile';
import * as api from './server/apiHandlers';
import bodyParser from 'body-parser'
const PORT = 3000;

const app = express();
//app.use(express.json());
app.use(bodyParser.json());

import Candidates from './server/Candidates';

global.fileName = '';
//move to another file...
const storage = multer.diskStorage({
  destination: function (req, file, callback) {

    console.log('dest')
    console.log(file)
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    //console.log(file);
    fileName = file.originalname;
    callback(null, file.originalname);
  }
});
const upload = multer({ storage: storage}).single('file');

app.post('/api/uploadFile', (req, res) => {
  let { referer } = req.headers;

  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.end('Error uploading file.');
    }
    console.log('File is uploaded');
    //res.end('File is uploaded');

    // spike for form after submit redirecting
    res.redirect(referer);
  });
});

app.get('/api/generateFile/:type/', api.generateFile);
app.get('/api/downloadFile/:filename/', api.downloadFile);

app.get('/api/candidates/', api.parseFile);
app.put('/api/candidates/', api.putCandidate);
app.delete('/api/candidates/', api.deleteCandidate);


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});

// ---------------------------- Webpack
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
else {
  app.use(express.static(__dirname + '/public'));
}
// ---------------------------- /Webpack

