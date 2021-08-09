const { Router } = require('express');
var express = require('express');
var usersBL = require('../models/usersBL');
var appRouter = express.Router();

appRouter.route('/').get(async(req,resp)=>{
    try{
        var users = await usersBL.getAllUsers();
    }catch(e){
        console.log(e);
    }
    
    return resp.json(users);
})
//Get By ID
appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id;
    var user = await usersBL.getUserById(id);
    return resp.json(user);
})

//Add 
appRouter.route('/').post(async(req,resp)=>{
    var userData= req.body;
    var user = await usersBL.addUser(userData);
    return resp.json(user);
})

module.exports = appRouter;