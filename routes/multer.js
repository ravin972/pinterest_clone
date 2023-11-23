const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/uploads"); // Destination folder  for upload
  },
  filename: (req, file, cb) => {
    const uniquename = uuidv4();
    cb(null, uniquename + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;