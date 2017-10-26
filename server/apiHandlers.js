import mongodb from 'mongodb';
import path from 'path';
import parser from './helpers/jsonFileParser';
import Candidates from './Candidates';
import { generateJSON, generateCSV } from './helpers/generators';


export const parseFile = (req, res) => {
  let filePath = path.join(__dirname, '/../uploads', global.fileName);

  parser(filePath)
    .then((data) => {
      Candidates.addItems(data);
      res.json({candidates: Candidates.getItems()})
    })
    .catch((err) => {
      console.log(err);
      res.end('Error parsing file.' + err);
    });
};

export const generateFile = (req, res) => {
  let { type } = req.params;
  let filename = 'mydb';
  let candidatesArray = Candidates.getItems();

  switch (type) {
    case 'json':
      generateJSON(candidatesArray, filename, res);
      break;
    case 'csv':
      generateCSV(candidatesArray, filename, res);
      break;
    default:
      break;
  }
};


export const downloadFile = (req, res) => {
  let { filename } = req.params;

  console.log('downloadFile')

  //let p = path.resolve('.') + '/uploads/' + filename;
  //let filePath = path.join('uploads', filename);
  let filePath = path.resolve('.') + '/uploads/' + filename;

  console.log(filePath);

  res.download(filePath)
};

export const putCandidate = (req, res) => {
  let { candidate } = req.body;
  //needs validation

  Candidates.updateItem(candidate, ( err, data ) => {
    res.json(data);
  });
};

export const deleteCandidate = (req, res) => {
  let { _id } = req.body;
  //needs validation

  Candidates.deleteItem(_id, ( err, data ) => {
    res.json(data);
  });
};
