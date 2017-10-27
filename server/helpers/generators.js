import path from 'path';
import fs from 'fs';
import json2csv from 'json2csv';
import * as CONSTANTS from '../constants';

export const generateJSON = (candidatesArray, filename, res) => {
  filename = `${filename}.${CONSTANTS.JSON_EXT}`;
  let filePath = path.join(CONSTANTS.UPLOAD_FOLDER, filename);
  let jsonData = JSON.stringify(candidatesArray);

  fs.writeFile( filePath, jsonData, CONSTANTS.ENCODING, (err) => {
    if (err) { return; }
    res.json({ filename });
  });
};

export const generateCSV = (candidatesArray, filename, res) => {
  filename = `${filename}.${CONSTANTS.CSV_EXT}`;
  let filePath = path.join('uploads', filename);
  const fields = ['candidateName', 'candidateStatus', 'candidateNeedOffer'];
  const csvData = json2csv({
    data: candidatesArray,
    fields: fields
  });

  fs.writeFile( filePath, csvData, CONSTANTS.ENCODING, (err) => {
    if (err) { return; }
    res.json({ filename });
  });
};
