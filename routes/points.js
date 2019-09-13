const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Point = require('../models/point');

router.get('/getPoints', (req, res) => {
    Point.find({ 'studentEmail': req.user.email }, 'pointValue', (err, docs) => {
        let pointTotal = 0;
        /*for (let i = 0; i < docs.length; i++) {
            pointTotal = docs[i].pointValue;
        }
        res.send(pointTotal);*/
        console.log(docs);
        console.log(docs.length);
        console.log(docs[0].pointValue);

        for (let i = 0; i < docs.length; i++) {
            pointTotal += docs[i].pointValue;
        }
        res.send(pointTotal + "");
    });
});

router.post('/submitPoints', (req, res) => {
    const { pointValue } = req.body;
    console.log(req.user.houseName);
    let earnedBy = req.user.name;
    let studentEmail = req.user.email;
    let studentHouseName;
    let newPoint;
    User.findOne({ 'email': req.user.email }, 'houseName', (err, user) => {
        studentHouseName = user.houseName;
        newPoint = new Point({
            pointValue: pointValue,
            earnedBy: earnedBy,
            houseName: studentHouseName,
            studentEmail: studentEmail
        });
        newPoint.save().then(
            (point) => {
                req.flash('points_submit_success', 'You\'re point contribution has been recorded');
                res.redirect('/members');
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });;
});

module.exports = router;