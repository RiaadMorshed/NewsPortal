const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let News = require('../model/news');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post( upload.single('photo'), (req, res) => {
    const {title, author, description, category }= req.body 
    const photo = req.file.filename;

    const newNewsData = {
        title,
        author,
        description,
        category,
        photo
    }

    const newNews = new News(newNewsData);
    newNews.save()
           .then(() => res.json('News Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;