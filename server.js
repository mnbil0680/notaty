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
app.get
app.post
app.put
app.delete

