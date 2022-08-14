require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.ts2blqg.mongodb.net/inShare?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');});
    // }).catch( err => {
    //     console.log('Connection failed ☹️☹️☹️☹️');
    // });
}
module.exports = connectDB;