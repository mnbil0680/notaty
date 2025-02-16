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

            cell1.innerHTML = note["title"];
            cell2.innerHTML = note["content"];
            cell3.innerHTML = note["updatedDate"];

        });
    });

}