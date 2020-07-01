const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TODO_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error connecting to mongo db"));

db.once('open', function(){
    console.log("Database is set up: MongoDB");
});

module.exports = db;