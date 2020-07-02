// setting upo mongoDB 
const mongoose = require('mongoose');
// connecting db with server
mongoose.connect('mongodb://localhost/TODO_development');

// accquire the connecting for checking if working file or not
const db = mongoose.connection;

// checking for error
db.on('error', console.error.bind(console, "error connecting to mongo db"));

// msg to know wether db is working or not
db.once('open', function(){
    console.log("Database is set up: MongoDB");
});

//exporting db to main file
module.exports = db;