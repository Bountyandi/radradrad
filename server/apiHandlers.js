import mongodb from 'mongodb';
import path from 'path';
import parser from './helpers/jsonFileParser';
import { multerUpload } from './multerUpload'
import Candidates from './Candidates';
import { generateJSON, generateCSV } from './helpers/generators';
import * as CONSTANTS from './constants';

export const parseFile = (req, res) => {
  if (global.fileName) {
    let filePath = path.join(
      __dirname, '/../',
      CONSTANTS.UPLOAD_FOLDER,
      global.fileName);

    return parser(filePath)
      .then((data) => {
        Candidates.addItems(data);
        res.json({candidates: Candidates.getItems()})
      })
      .catch((err) => {
        res.end('Error parsing file.' + err);
      });
  }
};

export const getCandidates = (req, res) => {
  const candidates = Candidates.getItems();
  res.json({ candidates })
};


export const generateFile = (req, res) => {
  let { type } = req.params;
  let filename = CONSTANTS.GENERATED_FILENAME;
  let candidatesArray = Candidates.getItems();

  switch (type) {
    case CONSTANTS.JSON_EXT:
      generateJSON(candidatesArray, filename, res);
      break;
    case CONSTANTS.CSV_EXT:
      generateCSV(candidatesArray, filename, res);
      break;
    default:
      break;
  }
};

export const downloadFile = (req, res) => {
  let { filename } = req.params;
  let filePath = path.resolve('.') + '/uploads/' + filename;

  res.download(filePath)
};

export const putCandidate = (req, res) => {
  let { candidate } = req.body;
  if (!candidate) {
    let errMes = 'object is empty';
    console.error(errMes);
    res.end(errMes);
  }

  Candidates.updateItem(candidate, ( err, data ) => {
    res.json(data);
  });
};

export const deleteCandidate = (req, res) => {
  let { _id } = req.body;
  if (!_id) {
    let errMes = '_id parameter is empty';
    console.error(errMes);
    res.end(errMes);
  }

  Candidates.deleteItem(_id, ( err, data ) => {
    res.json(data);
  });
};

export const uploadFile = (req, res) => {
  multerUpload(req, res, function (err) {
    if (err) {
      console.error(err);
      res.end(`Error uploading file. Err: ${err}`);
    }

    parseFile(null, res);
  });
};
