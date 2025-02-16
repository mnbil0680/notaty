// this Js file to handel notes.html

function updateNotesTable(noteTitle){
    let table = document.getElementById("notes-table");
    // remove all rows except the header
    while(table.rows.length > 1){
        table.deleteRow(1);
    }
    getAllNotes(noteTitle).then(data => {
        data.forEach(note => {
            let row = table.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            // adding style to the cell4
            cell4.style.display = "flex";
            cell4.style.justifyContent = "space-between";
            
            cell1.innerHTML = note["title"];
            cell2.innerHTML = note["content"];
            cell3.innerHTML = note["updatedDate"];
            // adding two images for edit and delete
            cell4.innerHTML =
            `<a href="#"
            style= "text-decoration: none;
            margin: auto;">
                <img 
                src="./images/edit.png" alt="edit"
                style="width: 22px; height: 22px;">
            </a>
            <a href="#"
            style= "text-decoration: none;
            margin: auto;"
            onclick="confirmDeleteNote('${note["_id"]}')">

                <img
                src="./images/delete.png" alt="delete"
                style="width: 22px; height: 22px;">

            </a>
            `
        });
    });

}

function searchNotes(){
    const searchTitle = document.getElementById("searchInput").value;
    updateNotesTable(searchTitle);

}

function confirmDeleteNote(noteId){
    let action = confirm("Are you sure you want to delete this note?");
    if(action ==true){
        deleteNote(noteId)
        .then( () => {
            updateNotesTable();
        })
        .catch( error =>{
            alert("Error: Unable to delete note", error);
        } );
    }


}