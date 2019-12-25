const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
    DisabledDate:[],
    bedrooms:{
        type:Number,
        require:true,
    },
    beds:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    bathrooms:{
        type:Number,
        require:true,
    },
    children:{
        type:Number,
    },
    babies:{
        type:Number,
    },
    smoking:{
        type:Boolean
    },
    friends:{
        type:Boolean
    },
    pets:{
        type:Boolean
    },
    wide_coridor:{
        type:Boolean
    },
    disabled_assistant:{
        type:Boolean
    },
})
module.exports = mongoose.model('Room',room)