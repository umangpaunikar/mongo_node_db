const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new.Schema({
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
    date:{type:"date", default: new Date.now}
})
module.exports =User = mongoose.model('users', UserSchema)