var express = require("express");
var app = express();
var port=3000;
var router = express.Router();

  
var path = __dirname + "/views/";
app.use(express.static('public'));
  
app.use("/",router);
  
router.get("/",function(req, res){

  res.sendFile(path + "home.html");
});

router.get("/login",function(req, res){
  res.sendFile(path + "login.html");
});
router.get("/About",function(req, res){

  res.sendFile(path + "about.html");
});
router.get("/Donate",function(req, res){
  res.sendFile(path + "donate.html");
});
router.get("/Sell",function(req, res){
  res.sendFile(path + "donsell.html");
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));