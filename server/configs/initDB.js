let axios  = require('axios')
//let membersBLFunctions = require('../models/membersBL');
let usersBLFunctions = require('../models/usersBL')

let usersDataPromise = axios.get("https://jsonplaceholder.typicode.com/users")
usersDataPromise.then((usersData)=>{
    
    for(let i = 0 ; i < usersData.data.length; i++){
        let user = {
            name: usersData.data[i].name,
            userName: usersData.data[i].name.split(" ")[0],
            password: usersData.data[i].address.zipcode.slice(-4)
        }
        usersBLFunctions.addUser(user)
    } 
})