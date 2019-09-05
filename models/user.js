const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    houseName: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getStudentHouse = function(studentEmail) {
    this.findOne({ email: studentEmail }, 'houseName', (err, User) => {});
}