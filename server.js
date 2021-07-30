//dependencies

const express = require("express");

const mongoose = require("mongoose");

const logger = require("morgan");

//port

const PORT = process.env.PORT || 3000;

//use express

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//creates db when server is started up in terminal

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
