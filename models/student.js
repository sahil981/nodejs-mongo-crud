const mongoose = require('mongoose');

var Student = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    contact: {
        type: Number,
        default: null
    },
    class:{
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('student', Student);