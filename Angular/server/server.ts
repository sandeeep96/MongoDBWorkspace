// Required Imports
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as path from 'path';

const app = express();
dotenv.load({path: '.env'});
const port = (process.env.port || 3000);
app.set('port', port);

// Parsers
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

const mongoDbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongoDbUri);

mongodb.then((db) => {
    console.log(`Connected to MongoDB @ 27017`);

    // app.use('/api', router);

    app.get('/', (req, res) => {
        res.json('Hello World!!');
        // res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });
}).catch((err) => {
    console.log(err);
});