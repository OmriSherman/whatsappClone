var User = require('./userSchema');



var getAllUsers = () => {
    return new Promise((resolve,reject) =>{
    User.find({}, (err,data)=>{
        if(err){
            reject(err);
        } else resolve(data);
    })
    })
}
var getUserById = (id) => {
    return new Promise((resolve,reject)=>{
        User.findById((id), (err,data)=>{
            if(err){
                reject(err);
            } else resolve(data);
        })
    })

}

var addUser = (newUser) => {
    return new Promise((resolve,reject)=>{
        var user = new User({
            name: newUser.name,
            userName: newUser.userName,
            password: newUser.password
        })
        user.save((err)=>{
            if(err){
                reject(err);
            } else {
                resolve(user);
            }
        })
    })

}

module.exports ={getAllUsers,addUser, getUserById}