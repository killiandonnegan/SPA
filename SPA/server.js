    
const express = require('express'); // we're making an ExpressJS App
const bodyParser = require('body-parser'); // we'll use body-parser extensively

const app = express(); // create the ExpressJS app


//User Interace additions
const hbs = require('hbs');
const path = require('path');


// parse the different kinds of requests (content-type) the app handles
// use the "use" method to set up the body-parser middlewear
app.use(bodyParser.json()) // application/json
app.use(bodyParser.urlencoded({ extended: true })) // application/x-www-form-urlencoded


//User Interace additions
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use('/assets',express.static(__dirname + '/public')); 


const dbConnect = require('./config/server_connect');
const mongoose = require('mongoose');

mongoose.connect(dbConnect.database.url, {
    useFindAndModify: false,  //fixes deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {
    console.log("Connected to the MongoDB database.");
}).catch(err => {
    console.log("Unable to connect to the MongoDB database", err);
    process.exit();
}); 


require('./app/routes/all.routes.js')(app);

    // listen for requests on port 3000
    app.listen(3000, () => {
    console.log("Server listening on port 3000");
    });











    