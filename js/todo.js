note = document.getElementById("note_txt");
notes_arr = [];

function print_notes() {
    document.getElementById("target").innerHTML = "";

    for (i = 0; i < notes_arr.length; i++) {
        var elem = document.createElement("li");
        elem.innerHTML = (i + 1) + ") " +
            notes_arr[i];
        i_val = i + 1;
        elem.setAttribute("id", "abc" + i_val);
        elem.setAttribute("class", "d-flex p-3 border");

        // var btnDiv = document.createElement("div");
        // editBtn.setAttribute("id", "dtnBlock" + i_val);

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "<i class='btn text-white'>Edit</i>";
        editBtn.setAttribute("id", i_val);
        editBtn.setAttribute("class", "btn-success mr-3");
        editBtn.setAttribute("onClick", "edit_note(this.id),btnChange()");

        var delBtn = document.createElement("button");
        delBtn.innerHTML = "<i class='btn text-white'>Delete</i>";
        delBtn.setAttribute("id", i_val);
        delBtn.setAttribute("class", "btn-danger");
        delBtn.setAttribute("onClick", "del_note(this.id)");



        document.getElementById("target").appendChild(elem);

        document.getElementById("abc" + i_val).appendChild(editBtn);
        document.getElementById("abc" + i_val).appendChild(delBtn);
    }
}

print_notes();

function add_note() {
    note_txt = note.value;

    if (note_txt != "") {
        notes_arr.push(note_txt);
        note.value = "";
        print_notes();
        // console.log(notes_arr);
    } else {
        alert("You must write something");
    }


}

function edit_note(id) {
    id = id - 1;
    document.getElementById("note_txt").value = notes_arr[id];
    updateBtn = document.getElementById("editBtn");
    updateBtn.setAttribute("onClick", "edit_note_tx(" + id + ")");

}

function edit_note_tx(id) {
    data = note.value;
    console.log(data, id);
    notes_arr[id] = data;
    note.value = "";
    document.getElementById("addBtn").style.display = 'block';
    document.getElementById("editBtn").style.display = 'none';
    print_notes();

}

function btnChange() {
    document.getElementById("addBtn").style.display = 'none';
    document.getElementById("editBtn").style.display = 'block';
}

function del_note(id) {

    i = id - 1;
    if (confirm("Are you Sure?")) {
        notes_arr.splice(i, 1);
    }
    print_notes();
}