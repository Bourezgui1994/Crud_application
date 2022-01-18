
const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require ('path');


// init app
const app =express();

const connectDB = require('./server/database/connection')


dotenv.config()

const PORT=process.env.PORT || 3000

//set view engine
app.set("view engine" , "ejs")

// use css
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// load routes

app.use('/', require('./server/routes/route'))

// mongodb connection
connectDB()

//listen to the port 
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost${PORT}`);
})