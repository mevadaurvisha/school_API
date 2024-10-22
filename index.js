import { log } from 'console';
import express from 'express';
import bodyParser from 'body-parser';
const port = 3004;
const app = express();
import path from 'path';
import routes from './routes/routes.js';
import db from './config/db.js';

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/v1', routes);

app.listen(port, (err) => {
    if(!err) {
        console.log(`server is running on http://localhost:${port}/v1`);
        
    }
})
