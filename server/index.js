import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// forward posts to router middleware
app.use('/posts', postRoutes);
// parse json and urlencoded
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
// cors request
app.use(cors());

//mongo db
const CONNECTION_URL = 'mongodb+srv://admin:PKiKJ5LwdRFYyuL@cluster0.9cxlb.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})// set the option to make the system work smoothly
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// no need, it is repaired
// mongoose.set('useFindAndModify', false);
