// this Js file to handel notes.html

function updateNotesTable(){
    let table = document.getElementById("notes-table");
    getAllNotes().then(data => {
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
                style="width: 22px; height: 22px;"
                onclick="editNote(${note["id"]})">
            </a>
            <a href="#"
            style= "text-decoration: none;
            margin: auto;">
                <img
                src="./images/delete.png" alt="delete"
                style="width: 22px; height: 22px;"
                onclick="deleteNote(${note["id"]})">
            </a>
            `

            

        });
    });

}