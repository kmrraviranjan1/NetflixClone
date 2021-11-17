const express =require('express')
const app = express();
const dotenv =require('dotenv');
const authRoute = require('./src/router/auth.route')
const userRoute = require('./src/router/user.route')
const connect = require('./src/config/db')
dotenv.config()

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.listen(2345,async ()=>{
    await connect()
    console.log('Server is listening on port 2345')
})