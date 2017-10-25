import jsonfile from 'jsonfile';

export default function parser(filePath){
  return new Promise((resolve, reject) => {
    jsonfile.readFile(filePath, function (err, arr) {
      if (err) { reject(err); }
      resolve(arr);
    });
  });
}
