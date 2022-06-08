
const express = require("express");
const mongoose = require("mongoose");
const res = require("express/lib/response");
const methodOverride = require("method-override");
const app = express();

//Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
require("dotenv").config({ path: require("find-config")(".env") });

const ArticleController = require("./controllers/articles");

//test route
app.get("/", (req, res) => res.send("backend working ..."));

app.use("/", ArticleController);


app.post('/', (req, res) => {
  res.render('website')
})

app.get('/website/home', (req, res) => {
  res.render('Home')
})

app.get('/website/NewInfo', (req, res) => {
  res.send('NewInfo')
})

app.get('/website/tech', (req, res) => {
  res.send('tech')
})


app.get('/website/login', (req, res) => {
  res.render('login')
})

app.get('/website/signin', (req, res) => {
  res.render('signin')
})


app.get('/website/user', (req, res) => {
  res.render('user')
})

app.get('/website/brainMaze', (req, res) => {
  res.send('brainMaze')
})

app.get('/website/logout', (req, res) => {
  res.send('logout')
})


app.get('*', (req, res) => {
  res.render('error404')
})

mongoose
  .connect(process.env.MONGO_URI) //for secret key
  .then(() => console.log("DB Connection Successfull!")) //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

//Listen for Connections
app.listen(process.env.PORT || 3400, () => {
  console.log("Backend server is running!");
});


