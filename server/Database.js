const mongoose = require('mongoose'); // Import mongoose library to be able to connect to the database
class Database{

    constructor(){
        this.Url = 'mongodb://localhost:27017/notaty'; // Database URL
        }
        connect(){
            mongoose.connect(this.Url, {}).then(()=>{
                console.log("Database Connected Successfully");
            }).catch((err)=>{
                console.log("Error in Database Connection", err);
              }) // Connect to the database
        }
    }


module.exports = Database; // Export the Database class to be able to use it in other files
