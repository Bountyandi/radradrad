import express from 'express';
import path from 'path';
import * as api from './server/apiHandlers';
import bodyParser from 'body-parser';
import Candidates from './server/Candidates';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.post('/api/uploadFile', api.uploadFile);

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

