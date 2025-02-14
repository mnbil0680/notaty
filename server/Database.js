const mongoose = require('mongoose'); // Import mongoose library to be able to connect to the database


class Database{
    constructor(){
        this.UrlUrl = 'mongodb://localhost:27017/notaty'; // URL to connect to the database through path and name of the database

    }
        // remove connect option useNewUrlParser has no effect since Node.js Driver version 4.0.0
        connect(){
            mongoose.connect(this.UrlUrl, {}).then(()=>{
                console.log('Databasee Connected Successfully');
            }).catch((err)=>{
                console.log('Error in Database Connection', err);
            }) // Connect to the database
        }

    
}


module.exports = Database; // Export the Database class to be able to use it in other files