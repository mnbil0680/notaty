const mongoose = require('mongoose'); // Import mongoose library to be able to connect to the database
const Note = require('./schemas/note'); // Import the Note schema to be able to use it in the Database class

class Database {

    constructor() {
        this.Url = 'mongodb://localhost:27017/notaty'; // Database URL
    }
    connect() {
        mongoose.connect(this.Url, {}).then(() => {
            console.log("Database Connected Successfully");
        }).catch((err) => {
            console.log("Error in Database Connection", err);
        }); // Connect to the database
    }

    addNote(note) {
        return new Promise((resolve, reject) => {
            // adding two fields to the note object
            note["createdDate"] = new Date();
            note["updatedDate"] = new Date();
            let newNote = new Note(note); // Create a new note object
            newNote.save().then(doc => {
                resolve(doc);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getNotes() {
        return new Promise((resolve, reject) => {
            Note.find().then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Database; // Export the Database class to be able to use it in other files
