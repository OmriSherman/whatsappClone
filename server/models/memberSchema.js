var mongoose = require('mongoose');

var appSchema = mongoose.Schema;
var memberSchema = new appSchema({
    name: String,
    email: String,
    password: String
})
module.exports = mongoose.model('members',memberSchema);