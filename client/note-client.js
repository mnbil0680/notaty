// this file contains the functions that will be used to interact with the server

const baseUrl =  "http://localhost:3000";

async function addNote(noteData){
    const response = await fetch(`${baseUrl}/notes`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return response; 
} 

async function updateNote(noteId, noteData) {
    const response = await fetch(`${baseUrl}/notes/${noteId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return response;
}

async function deleteNote(noteId){
    const response = await fetch(`${baseUrl}/notes/${noteId}`, {
        method: "DELETE"
    });
    return response;
}

async function getNoteById(noteID){
    const response =await fetch(`${baseUrl}/notes/${noteID}`,{
        method: "GET"
    });
    return response;
}

async function getAllNotes(noteTitle){
    let url = `${baseUrl}/notes`;
    if(noteTitle){
        url += `/?title=${noteTitle}`;
    }
    const response = await fetch(url);
    return response;
}