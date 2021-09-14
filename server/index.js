require("dotenv").config();
require("./config/database").connect();
var cors = require('cors')

const auth = require("./middleware/auth");

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors())

//controller import
const userController = require('./controller/usercontroller')
const adminController = require('./controller/admincontroller')
const newsController = require('./controller/newscontroller')

const port = process.env.PORT || 5000;
//user Register and login api endpoint
app.post("/register",userController.register);
app.post("/login",userController.login);

//admin addPoint and login api endpoint
app.post("/addAdmin",adminController.addAdmin);
app.post("/adminLogin",adminController.adminLogin);

//news related api end point
//app.post("/addNews", newsController.addNews);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.get("/allNews",newsController.allNews);
app.get("/news/:category",newsController.categoryNews);

app.post("/welcome", auth, (req, res) => {
res.status(200).send("Welcome 🙌 ");
});

app.get("/", (req, res)=>{
  res.send("worked!")
})


// image upload testing
app.use(express.static('images'))

// server listening 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});