// require library for setting schema in it
const mongoose = require('mongoose');

// creating schema

const todoSchema = new mongoose.Schema({
    description: {
        type : String,
        required: true
    },
    category: {
        type : String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

// creating db with a particular name in mongodb
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
