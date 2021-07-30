const path = require("path");

const router = require("express").Router();


router.get("/exercise", (req, res) => {
   res.sendFile(path.join(__dirname, "../Develop/public/exercise.html") )
  });

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/stats.html") )
});


module.exports = router;
