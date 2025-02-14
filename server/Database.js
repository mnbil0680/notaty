const mongoose = require('mongoose'); // Import mongoose library to be able to connect to the database
class Database{
    constructor(){
<<<<<<< HEAD
        this.Url = 'mongodb://127.0.0.1:27017/notaty'; // URL to connect to the database through path and name of the database
=======
        this.Url = 'mongodb://0.0.0.0:27017/notaty'; // URL to connect to the database through path and name of the database
>>>>>>> 66e09457fbcdc9e3273989afa84c6d706bc7bf0f
    }
        connect(){
            mongoose.connect(this.Url, {}).then(()=>{
                console.log("Database Connected Successfully");
            }).catch((err)=>{
                console.log("Error in Database Connection", err);
            }) // Connect to the database
        }
}

<<<<<<< HEAD
module.exports = new Database(); // Export the Database class to be able to use it in other files
=======
module.exports = Database; // Export the Database class to be able to use it in other files
>>>>>>> 66e09457fbcdc9e3273989afa84c6d706bc7bf0f
