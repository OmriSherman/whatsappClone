var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var userController = require ('./controllers/userController')

var app = express();

require("./configs/database");
//require("./configs/initDB");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json());
app.use('/users',userController);

app.listen(8002,()=>{
    console.log("server is up");
})