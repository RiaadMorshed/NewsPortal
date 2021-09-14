const News = require("../model/news");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

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


const newsController = {}
newsController.addNews =  ( async (req, res) => {

    try {
      // Get news data from request body
      const {title, author, description, category } = req.body;
      console.log(req.body)
      if (!(title && author && description && category)) {
        res.status(400).send("All input is required in news");
      }
      console.log("about file:", req.file);
      // Create user in our database
      const news = News.create({
        image : req.file.filename,
        title,
        author,
        description,
        category
      });
      // return created news data
      res.status(201).json(news)
    } catch (err) {
      console.log(err)
    }
  })
 
newsController.allNews = async (req, res)=>{
    News.find({},function (err, allNews) {
        if (err) console.log(err)
        else{
            res.status(201).json(allNews)
        }
      })
}



newsController.categoryNews = async(req, res)=>{
  try{
    const category = req.params.category
    console.log(category, req.param)
    News.find({category: category},function (err, allNews) {
      if (err) console.log(err)
      else{
          res.status(201).json(allNews)
      }
    })
  }
  catch{
    console.log(error);
  }
}

module.exports = newsController;