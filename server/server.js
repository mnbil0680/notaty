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
    // title for search
    const {title } = req.query;
    if(title){
        db.getNotesByTitle(title)
        .then(data =>{
            res.send(data);
        }).catch(err =>{
            res.status(500).send(err);
        });
    }else{
        db.getNotes().then(data =>{
            res.send(data);
        }).catch(err =>{
            res.status(500).send(err);
        });
    }
});

app.get('/notes/:id', (req, res) => {
    const { id } = req.params;  
    db.getNoteById(id).then(data =>{
        if(!data){
            return res.status(404).send(`Note not found: ${id}`);
        }
        res.send(data);
    }).catch(err =>{
        res.status(500).send(err);
    });
});

app.put('/notes', (req, res) => {
    db.updateNote(req.body)
    .then(data =>{
        if(!data){
            res.status(404).send(`Note not found: ${req.body["-id"]}`);
        }
        res.send(data);
    }).catch(err =>{
        res.status(500).send(err);
    });
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    db.deleteNoteById(id)
    .then(data =>{
        if(!data){
            res.status(404).send(`Note not found: ${id}`);
        }
        res.send(data);
    }).catch(err =>{
        res.status(500).send(err);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
    db.connect();
}); // Start the server on port 3000