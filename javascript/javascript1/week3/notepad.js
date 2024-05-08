const notes = [];

//save a note
function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); //[{ content: 'Pick up groceries', id: 1 }, { content: 'Do laundry', id: 2 }]
