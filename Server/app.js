const express = require('express');
const ConnectDatabase = require('./Configs/db');
const router = require('./Routes/route');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/',router);

app.listen(2211, ()=>{
 console.log('server is connected');
 ConnectDatabase().then(console.log('connected database')).catch(err=>console.log(err));
})