const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // it is very important to make API calls from different domain
app.use(bodyParser.json()); // parse the incoming request body
app.use(bodyParser.urlencoded({ extended: false })); // parse the incoming request body

// Most common API routes
/**
 * POST - Create   ==> Create a new note
 * GET - Read      ==> Get all notes information
 * GET - Read      ==> Get information of a specific note
 * PUT - Update    ==> Update a note
 * DELETE - Delete ==> Delete a note
 */

// Temporary data store even can be used as a database
let notes = [];

// Create POST API to be able to create a new note
app.post('/notes', (req, res) =>{
    const body = req.body;
    console.log(`BODY: ${body}`);
    notes.push(body.title);

    res.send(true);
    //res.status(201).send('Note is created');
}); // ("/notes", callBack function(req, res) => { });

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
});