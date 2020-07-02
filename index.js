// setting up express and port
const express = require('express');
const app = express();
const port = 8000;
//getting the db 
const db = require('./config/mongoose');


// middleware to access static files
app.use(express.static('./assets'));
// app.use(express.urlencoded());

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// setting up router
app.use('/', require('./router'));
 


// checking for error in sever .. if not displaying msg of "server working fine"
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    };
    console.log(`server is running on port: ${port}`);
});