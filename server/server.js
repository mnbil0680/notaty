const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const Database = require('./Database');
const db = new Database();

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));



// Create POST API to be able to create a new note
app.post('/notes', (req, res) =>{
    const body = req.body;
    console.log("BODY:", body);
    db.addNote(body).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send(err);
    });

    
}); 

// create GET API to be able to get all notes
app.get('/notes', (req, res) => {
    console.log("GET ALL NOTES");
    res.send(notes);

    
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
    db.connect();
}); // Start the server on port 3000