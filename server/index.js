import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

// router
import MainRouter from './router/router.js'

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

const ATLAS_URI = `mongodb+srv://${process.env.DB_ACCESS_USER}:${process.env.DB_ACCESS_PASSWORD}@todotask.bk9ombn.mongodb.net/?retryWrites=true&w=majority`;

app.use('/', MainRouter);
app.get('/', (req, res) => {
    res.send('App is running');
});

if (ATLAS_URI) {
    mongoose.connect(ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(PORT, () => {
            console.log(`app is running at PORT:${PORT}`)
        })
    }).catch(err => {
        console.log(err) 
    })
} else {
    console.log("CONNECTION URL NOT FOUND")
}
