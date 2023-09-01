const mongoose = require('mongoose')
const moment = require('moment/moment')

const feedSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    message : {
        type : String,
        required : true
    },
    created_at:{
        type: Date,
        default : Date.now,
        get: function (createAt) {
            return moment(createAt).format('MMMM Do YYYY')
        }

    }
},{timestamps: true})

const Feed = mongoose.model('Feed', feedSchema)
module.exports = Feed;