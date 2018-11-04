"use strict";
import mongoose from 'mongoose'
import app from './express'

//Connect to MongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true}, function(err){
  if (err){
    console.error(`Failed to connect to MongoDB with URI ${mongoURI}`);
    console.error(err.stack);
    process.exit(1);
  }
});

let db = mongoose.connection;

//Basic error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

db.once('open', function() {
  app.listen(port);
  console.log("Server started on port %s.", port);
});