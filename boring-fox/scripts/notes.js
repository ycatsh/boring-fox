function update_notes() {
    var notes_list = document.getElementById("notes-list");
    var notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(function (note) {
        var note_element = create_note(note);
        notes_list.appendChild(note_element);
    });
}

function add_note() {
    var notes_input = document.getElementById("notes-input");
    var note_text = notes_input.value.trim();

    if (note_text !== "") {
        var notes_list = document.getElementById("notes-list");
        var note_element = create_note(note_text);
        notes_list.appendChild(note_element);

        var notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note_text);

        localStorage.setItem("notes", JSON.stringify(notes));
        notes_input.value = "";
    }
}

function clear_notes() {
    var notes_list = document.getElementById("notes-list");
    notes_list.innerHTML = "";
    localStorage.removeItem("notes");
}

function create_note(note_text) {
    var note_element = document.createElement("div");
    note_element.className = "note";

    var note_content = document.createElement("div");
    note_content.className = "note-content";
    note_content.innerText = note_text;

    var note_date = document.createElement("div");
    note_date.className = "note-date";
    note_date.innerText = format_date(new Date());

    note_element.appendChild(note_content);
    note_element.appendChild(note_date);

    return note_element;
}

function format_date(date) {
    var options = { 
        year: "numeric", month: "short", day: "numeric", 
        hour: "numeric", minute: "numeric" 
    };
    return date.toLocaleString("en-US", options);
}

window.addEventListener("load", update_notes);