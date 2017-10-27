import path from 'path';
import fs from 'fs';
import json2csv from 'json2csv';
const ENCODING = 'utf8';

export const generateJSON = (candidatesArray, filename, res) => {
  filename = `${filename}.json`;
  let filePath = path.join('uploads', filename);
  let jsonData = JSON.stringify(candidatesArray);

  fs.writeFile( filePath, jsonData, ENCODING, (err) => {
    if (err) { return; }
    res.json({ filename });
  });
};

export const generateCSV = (candidatesArray, filename, res) => {
  filename = `${filename}.csv`;
  let filePath = path.join('uploads', filename);
  const fields = ['candidateName', 'candidateStatus', 'candidateNeedOffer'];
  const csvData = json2csv({
    data: candidatesArray,
    fields: fields
  });

  fs.writeFile( filePath, csvData, ENCODING, (err) => {
    if (err) { return; }
    res.json({ filename });
  });
};
