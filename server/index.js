const express =require('express')
const app = express();
const dotenv =require('dotenv');

const connect = require('./src/config/db')
dotenv.config()
app.listen(2345,async ()=>{
    await connect()
    console.log('Server is listening on port 2345')
})