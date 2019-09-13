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
    studentEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Point = mongoose.model('Point', PointSchema);

// module.exports.getPointsByUserEmail = function(userEmail) {
//     let results = 
// }

module.exports = Point;