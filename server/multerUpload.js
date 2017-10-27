import multer from 'multer';
global.fileName = '';

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // to make sure that file uploaded
    console.log(file);
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

export const multerUpload = multer({
  storage: storage
}).single('file');