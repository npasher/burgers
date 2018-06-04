//Require Dependencies.//
const express=require("express");
const bodyParser=require("body-parser");
const exphbs=require("express-handlebars");

const router=require("./controllers/burgers_controller.js");
//Creating an sever via express.//
const app=express();
//Inital port//
const PORT=process.env.PORT || 3000;
//Sets BodyParser used by Express as middleware.//
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Setup of handlebars engine.//
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
//Static assets.//
app.use(express.static("public"));
//Route plans included from controller.//
app.use(router);
//Listener//
app.listen(PORT,function(){
  console.log("Listening on port:",PORT);
});