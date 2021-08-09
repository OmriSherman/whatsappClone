var mongoose = require('mongoose');

var appSchema = mongoose.Schema;
var userSchema = new appSchema({
    name: String,
    userName: String,
    password: String
})
module.exports = mongoose.model('users',userSchema);