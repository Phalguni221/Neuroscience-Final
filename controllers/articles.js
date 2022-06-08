const router = require("express").Router();
const NewInfo = require("../models/newinfo");
const tech = require("../models/tech");

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

    router.get("/login", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/login");
      // res.render('Header',{message:'we work'})
    })

    router.get("/braingame", (req, res) => {
      console.log("neuro");
      res.render("website/brainMaze");
      // res.render('Header',{message:'we work'})
    })

    
    router.post("/user", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/user");
      // res.render('Header',{message:'we work'})
    })


router.get("/login", (req, res) => {
  res.render("login");
});


module.exports = router;
