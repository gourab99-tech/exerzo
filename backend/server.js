const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//we are getting the modules

require('dotenv').config();
//we will store our env variable in this file

const app = express();
const port = process.env.PORT || 5000;
//we are creating the server

app.use(cors()); // cors middle ware
app.use(express.json()); // this will allow us to parse(sending & recieving) JSON 

const uri = 'mongodb+srv://gourab99:gourab@cluster0.eurnu.mongodb.net/mernapp?retryWrites=true&w=majority';

mongoose.connect(uri).then(() => {
}).catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection establised successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});