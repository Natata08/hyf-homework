const notes = [];

//save a note
function saveNote(content, id) {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    console.log(`A note with ID ${id} already exists. Please use a unique ID`);
  } else {
    const note = { content, id };
    notes.push(note);
  }
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Do laundry', 2);
console.log(notes); //[{ content: 'Pick up groceries', id: 1 }, { content: 'Do laundry', id: 2 }]

//get a note
function getNote(id) {
  if (id === undefined || typeof id !== 'number') {
    console.log('Error: The id is not specified or the id is not a number');
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) return note;
  }
  console.log('Note not found for ID:', id);
  return;
}

// const firstNote = getNote(1);
// console.log(firstNote); // {content: 'Pick up groceries', id: 1}
// const firstNote1 = getNote();
// console.log(firstNote1); // Error: The id is not specified or the id is not a number
// const firstNote2 = getNote('2');
// console.log(firstNote2); // Error: The id is not specified or the id is not a number
// const firstNote3 = getNote(3);
// console.log(firstNote3); // Note not found for ID: 3

//Log out notes
function logOutNotesFormatted() {
  let output = '';
  for (const note of notes) {
    output += `The note with id: ${note.id}, has the following note text: ${note.content}`;
    if (notes.indexOf(note) !== notes.length - 1) output += '\n';
  }
  // console.log(output);
}
// logOutNotesFormatted();
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// Unique features
//Delete notes
function deleteNote(id) {
  if (id === undefined || typeof id !== 'number') {
    console.log('Error: The id is not specified or the id is not a number');
    return;
  }
  let deleteNoteIndex;
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
      deleteNoteIndex = i;
      break;
    } else {
      console.log('Note not found for ID:', id);
      return;
    }
  }
  notes.splice(deleteNoteIndex, 1);
}

// saveNote('Do homework', 3);
// deleteNote(1);
// console.log(notes); //[ { content: 'Do laundry', id: 2 }, { content: 'Do homework', id: 3 } ]
// deleteNote(4); //Note not found for ID: 4

//Edit notes
function editNote(newContent, id) {
  if (id === undefined || typeof id !== 'number') {
    console.log('Error: The id is not specified or the id is not a number');
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
      console.log('!!!!');
      note.content = newContent;
      break;
    } else {
      console.log('Note not found for ID:', id);
      return;
    }
  }
}

// editNote('Do homework', 3);
// console.log(notes);
