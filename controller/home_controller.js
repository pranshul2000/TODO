// getting the database schema 
const Todo = require('../models/Todo');

// function for a particular page .... and exporting it
module.exports.home = function(req, res){
    
    Todo.find({}, function(err, allTodos){
        if(err){
            console.log('error in fetching the contact from db');
            return;
        }
        return res.render('home', {
            title: "home",
            todo_list: allTodos
        });
    });
};


module.exports.newTodo = function(req, res){
    console.log(req.body);
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err, newTodo){
        if(err){
            console.log('error in creating new todo ');
            return;
        }
        console.log("##########" , newTodo);
        res.redirect('back');
    });
}