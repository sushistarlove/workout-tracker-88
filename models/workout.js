const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: ()=> new Date()
        },
    
    exercises: [{
        type: {type: String, trim: true, required: `Enter Workout Type`},
        name: {type: String, trim: true, required: `Enter Workout Name`},
        duration: {type: Number, reuired: `Enter Desired Workout Length`},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number}
        }]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
