const router = require("express").Router();


const Workout = require("../models");


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        { $addFields: {totalDuration: {
            $sum: $exercises.duration
        }} }
     ]).then(db => {
         res.json(db)
     }).catch(err => {
         res.json(err);
     })
})


