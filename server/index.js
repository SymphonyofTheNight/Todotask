import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// model
import ModelSchema from './ModelSchema/ModelSchema.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

const database_connection = `mongodb+srv://todotask:1234@todotask.bk9ombn.mongodb.net/`;

app.use('/', ModelSchema);
app.get('/', (req, res) => {
    res.send('APP IS RUNNING');
});


if (database_connection) {
    mongoose.connect(database_connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(PORT, () => {
            console.log(`app is running at PORT:${PORT}`)
        })
    }).catch(err => {
        console.log(err)
    })
}
