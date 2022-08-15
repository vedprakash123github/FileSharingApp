
require('dotenv').config();
const express=require('express');
const path=require('path');
//const cors=require('cors');

const app=express();
const PORT=process.env.PORT;
app.use(express.static('public')); // to give server the information about the static part of the view ie. html and css content
app.use(express.json()); // to enable express server to accept the json data in the request body.

//Db Connection
const DbConnect = require('./config/db');
DbConnect();

//cors

// const corsOptions={
//     origin:process.env.ALLOWED_CLIENTS.split(',')
// }

// app.use(cors(corsOptions));


// Template Engine
app.set('views',path.join(__dirname, './views'));

app.set('view engine','ejs');


//routes
// app.use('/api', require('./routes/files'));
app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
