const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    pointValue: {
        type: Number,
        required: true
    },
    earnedBy: {
        type: String,
        required: true
    },
    houseName: {
        type: String,
        required: true,
    },
    studentID: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Point = mongoose.model('Point', PointSchema);

module.exports = Point;