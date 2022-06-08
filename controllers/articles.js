const router = require("express").Router();
const NewInfo = require("../models/newinfo");
const tech = require("../models/tech");
const bcrypt = require ("bcrypt");

router.get("/", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/App");
      // res.render('Header',{message:'we work'})
    })
  
    router.get("/home", (req, res) => {
      console.log("neuro");
      res.render("website/home");
      // res.render('Header',{message:'we work'})
    })

    router.get("/NewInfo", (req, res) => {
      console.log("neuro", NewInfo);
      NewInfo
      .find({})
      .then(newinfo => {
        console.log(newinfo)
      res.render("website/newinfo", {newinfo})
        })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
      // res.render('Header',{message:'we work'})
    })

    router.get("/tech", (req, res) => {
      // console.log("neuro", tech);
      tech
      .find({})
      .then(techno => {
        console.log(techno)
      res.render("website/tech", {tech: techno})
        })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
      // res.render('Header',{message:'we work'})
    })

    // router.get("/login", (req, res) => {
    //   // console.log("neuro", newinfo);
    //   res.render("website/login");
    //   // res.render('Header',{message:'we work'})
    // })

 router.get("/login", (req, res) => {
  //  const body = req.body;
  //  if (userPassword) {
  //   // check user password with hashed password stored in the database
  //   const validPassword = bcrypt.compare(body.password, userPassword.password);
  //   if (validPassword) {
  //     res.status(200).json({ message: "Valid password" });
  //   } else {
  //     res.status(400).json({ error: "Invalid Password" });
  //   }
  // } else {
  //   res.status(401).json({ error: "User does not exist" });
  // }
      // console.log("neuro", newinfo);
      res.render("website/login");
      // res.render('Header',{message:'we work'})
    })

    router.get("/signin", (req, res) => {

      // if (!(body.email && body.password)) {
      //   return res.status(400).send({ error: "Data not formatted properly" });
      // }
      // const user = new user(body);

      // // generate salt to hash password20
      // const salt = bcrypt.genSalt(10);
      // // now we set user password to hashed password
      // user.password = bcrypt.hash(user.password, salt);
      // user.save().then((doc) => res.status(201).send(doc));

      res.render("website/signin");
 
    });

    router.get("/braingame", (req, res) => {
      console.log("neuro");
      res.render("website/brainMaze");
      // res.render('Header',{message:'we work'})
    })

    
    router.get("/logout", (req, res) => {
      console.log("neuro");
      res.render("website/logout");
      // res.render('Header',{message:'we work'})
    })

    
    router.post("/user", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/user");
      // res.render('Header',{message:'we work'})
    })



module.exports = router;
