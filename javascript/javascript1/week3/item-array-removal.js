const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';

function removeName(namesList, nameToRemove) {
  const indexOfRemovingName = namesList.indexOf(nameToRemove);
  if (indexOfRemovingName >= 0) {
    namesList.splice(indexOfRemovingName, 1);
  } else {
    console.log(`Error: The name '${nameToRemove}' was not found in the list.`);
  }
}

removeName(names, nameToRemove);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

removeName(names, 'Sam'); //Error: The name 'Sam' was not found in the list.
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
