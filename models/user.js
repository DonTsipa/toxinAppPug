const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name:{
        type:String,
        require:true,
    },
    sex:{
        type:String,
        require:true,
    },
    login:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
    },
    birthdate:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
    },
    Orders:[],

})
module.exports = mongoose.model('User',user)
