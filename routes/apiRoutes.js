const router = require("express").Router();

const Workout = require("../models/workout");


router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration" ,
        },
      },
    },
  ])
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
  Workout.create({

  })

    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])

    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
