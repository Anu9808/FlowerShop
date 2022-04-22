const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/flower?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(mongoUri, ()=>{
        console.log('connection established suessfully');
    })
}

module.exports = connectToMongo;