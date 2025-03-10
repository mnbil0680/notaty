const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title: {type: String,required: true},
    content:{type: String,required: true},
    createdDate:{type: Date, required: true},
    updatedDate:{type: Date, required: true}
}); // Create a schema for the note

module.exports = mongoose.model('Note', noteSchema); // Export the schema to be able to use it in other files