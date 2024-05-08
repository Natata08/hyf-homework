const notes = [];

//save a note
function saveNote(content, id) {
  const note = { content, id };
  notes.push(note);
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); //[{ content: 'Pick up groceries', id: 1 }, { content: 'Do laundry', id: 2 }]

//get a note
function getNote(id) {
  if (!id || typeof id !== 'number') {
    return 'Error: The id is not specified or the id is not a number';
  }
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) return note;
  }
  return 'A note with such an id does not exist';
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
const firstNote1 = getNote();
console.log(firstNote1); // Error: The id is not specified or the id is not a number
const firstNote2 = getNote('2');
console.log(firstNote2); // Error: The id is not specified or the id is not a number
const firstNote3 = getNote(3);
console.log(firstNote3); // A note with such an id does not exist
