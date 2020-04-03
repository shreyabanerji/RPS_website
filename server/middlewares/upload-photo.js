const multer = require('multer');

//here dest is the path where the file will be stored.

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload=multer({storage:storage});
module.exports = upload;