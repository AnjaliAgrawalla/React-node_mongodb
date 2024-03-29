const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

   moduleexports = mongoose.model('mytable', signUpTemplate)
})