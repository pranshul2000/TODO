const express = require('express');
const app = express();
const port = 8000;


// setting up router
app.use('/', require('./router/index'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    };

    console.log(`server is running on port: ${port}`);
});