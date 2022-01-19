const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:{
        type:"string",
        required: true,
    },
    email:{
        type:"string",
        required: true,
    },
    password:{
        type:"string",
        required: true,
    },
    avatar:{type:"string"},
    date:{type:"date"}
});


module.exports = mongoose.model('users', UserSchema); // collection 