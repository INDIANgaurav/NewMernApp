const mongoose = require('mongoose');

MONGODB_URI = "mongodb+srv://gauravparasar:naYnZjnOEPRRT2Jq@cluster0.dbko5zn.mongodb.net/mern_admin";

const connectDb = async () => {
    try {
        await mongoose.connect(MONGODB_URI) ;
        console.log("connection established successfully to DB ") ; 
    } catch (error) {
        console.log("db connection error")
        process.exit(1)
    }
}


module.exports = connectDb ;