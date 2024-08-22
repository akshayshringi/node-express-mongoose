const mongoose = require('mongoose');

module.exports.connectDB = () => {
    mongoose.set('strictQuery', false);

    const url = "mongodb://127.0.0.1/testcart";

    try{
        mongoose.connect(url);
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }

    const databaseConnection = mongoose.connection;
    databaseConnection.once("open", (_) => {
        console.log(`Database connected: ${url}`);
    });

    databaseConnection.on('error', (err) => {
        console.error(`connection error: ${err}`);
    });

    return;
}