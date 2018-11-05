"use strict";
import mongoose from 'mongoose'
import app from './express'
import config from './../config/config'

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useNewUrlParser: true}, function(err){
  if (err){
    console.error(`Failed to connect to MongoDB with URI ${mongoURI}`);
    console.error(err.stack);
    process.exit(1);
  }
});

mongoose.connection.once('open', function() {
    app.listen(config.port);
    console.log("Server started on port %s.", config.port);
  });

//Basic error handling TODO probably do something nice instead of this
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});