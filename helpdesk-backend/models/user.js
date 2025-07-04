const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: String,
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    userType: {
        type: String,
        enum: ['user', 'admin', 'opteam', 'techsupport'],
        default: 'user'
    }
});

module.exports = mongoose.model('User', userSchema);