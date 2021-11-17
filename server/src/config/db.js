const mongoose = require('mongoose');
const connect = ()=> mongoose.connect(process.env.MONGO_URL).then(()=>console.log('db connected')).catch((err)=>console.log('error in db connection',err))
module.exports=connect