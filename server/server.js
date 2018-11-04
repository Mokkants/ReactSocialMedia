"use strict";
const 
express = require("express"),
mongoose = require('mongoose'),
path = require('path');
      
let app = express();
let port = process.env.PORT || 3000;
let mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/app';

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

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