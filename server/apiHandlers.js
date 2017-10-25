import mongodb from 'mongodb';
import path from 'path';
import parser from './helpers/jsonFileParser';
import Candidates from './Candidates';

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

export const putCandidate = (req, res) => {
  let { candidate } = req.body;
  //needs validation

  Candidates.updateItem(candidate, ( err, data ) => {
    res.end(data);
  });

};

export const deleteCandidate = (req, res) => {
  let { _id } = req.body;
  //needs validation

  Candidates.deleteItem(_id, ( err, data ) => {
    res.end(data);
  });
};





/*

export const putTermino = (req, res) => {
  const { _id, name, description } = req.body;

  global.db.collection('terminos').update(
    { _id: new mongodb.ObjectId(_id) },
    { $set: { name, description } },
    (err, result) => {
      errorHandler(err);
      res.json({ _id, name, description });
    })
};

export const deleteTermino = (req, res) => {
  const { _id } = req.body;

  global.db.collection('terminos').remove(
    { _id: new mongodb.ObjectId(_id) },
    (err, result) => {
      errorHandler(err);
      res.json({ _id });
    })
};

*/

/*
function errorHandler(err) {
  if (err) {
    res.status(500).json({errors: {global: 'Something went wrong'}});
  }
}
*/

