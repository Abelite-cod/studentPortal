const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match:[/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        lowercase: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
},{
    timestamps: true,
    versionKey: false
});


const User = mongoose.model('User', userSchema)
module.exports = User