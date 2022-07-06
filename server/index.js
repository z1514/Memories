import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// parse json and urlencoded
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
// cors request
app.use(cors());

// forward posts to router middleware
// should below the cors because of the order
app.use('/posts', postRoutes);

//mongo db
//set the .env
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})// set the option to make the system work smoothly
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// no need, it is repaired
// mongoose.set('useFindAndModify', false);
