import express from 'express';
import path from 'path';
import {MongoClient} from 'mongodb';

import devBundle from './devBundle';
import index from './../index';

const CURRENT_WORKING_DIR = process.cwd();
const port = process.env.PORT || 5000;
const dbURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/mernSimpleSetup';

const app = express();
// devBundle.compile(app);

app.use('/dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')));

app.get('/',(req,res)=>{
    res.status(200).send(index());
});

// Start Listen to run the server
app.listen(port,function onStart (err){
    if(err)
        console.error(err);
    console.info(`Server is starting at the port ${port}`);
})

//Database connect with server
MongoClient.connect(dbURL,{useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
    if(err){
        console.error(err);
    }
    console.log('Connected successfully to mongodb server');
    db.close();
})



