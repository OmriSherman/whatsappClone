var Member = require('./memberSchema');
var axios = require('axios')

var getAllMembers = () => {
    return new Promise((resolve,reject) =>{
    Member.find({}, (err,data)=>{
        if(err){
            reject(err);
        } else resolve(data);
    })
    })
}

var getMemberById = (id) => {
    return new Promise((resolve,reject)=>{
        Member.findById((id), (err,data)=>{
            if(err){
                reject(err);
            } else resolve(data);
        })
    })

}

var addMember = (newMem) => {
    return new Promise((resolve,reject)=>{
        var mem = new Member({
            name: newMem.name,
            email: newMem.email,
            password: "123456"
        })
        mem.save((err)=>{
            if(err){
                reject(err);
            } else {
                resolve(mem);
            }
        })
    })

}

var updateMember = (memId, newData) => { 
    return new Promise((resolve,reject)=>{
        Member.findByIdAndUpdate(memId,{
            name: newData.name,
            password:"123456"
        },(err)=>{
            if(err){
                reject(err);
            } else {
                resolve("member updated!");
            }
        })
    })

}

var deleteMember = (id) => { 
    return new Promise((resolve,reject)=> {
        Member.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else resolve("member deleted!");
        })
    })

}
module.exports = {getAllMembers,getMemberById,addMember,updateMember,deleteMember};