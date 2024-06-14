function countCharacters(charactersArray) {
  const characterCounter = {};
  for (let i = 0; i < charactersArray.length; i++) {
    const character = charactersArray[i];
    characterCounter[character] = isNaN(characterCounter[character])
      ? 1
      : characterCounter[character] + 1;
  }
  return characterCounter; //{ a: 1, h: 1, p: 2, y: 1 }
}

function formCharacterAndCountArray(characterCounter) {
  const charactersAndCountArray = [];
  for (const character in characterCounter) {
    charactersAndCountArray.push({
      character,
      count: characterCounter[character],
    });
  }
  return charactersAndCountArray; //[{character: 'a', count: 1},.. ]
}

function getCharacterFrequencies(string) {
  if (typeof string !== 'string') {
    console.log('Error: The provided value is not a string!');
    return;
  }
  //creating an array and sorting the letter alphabetically
  const arrayFromString = string.split('').sort();
  //counting number of each letters and forming an object { a: 1, h: 1, ...}
  const characterCounter = countCharacters(arrayFromString);
  //forming an array with nested objects [{character: 'a', count: 1},.. ]
  const charactersAndCountArray = formCharacterAndCountArray(characterCounter);

  return { characters: charactersAndCountArray, length: string.length };
}

console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/

console.log(getCharacterFrequencies('international'));
// {
//   characters: [
//     { character: 'a', count: 2 },
//     { character: 'e', count: 1 },
//     { character: 'i', count: 2 },
//     { character: 'l', count: 1 },
//     { character: 'n', count: 3 },
//     { character: 'o', count: 1 },
//     { character: 'r', count: 1 },
//     { character: 't', count: 2 }
//   ],
//   length: 13
// }

console.log(getCharacterFrequencies('')); //{ characters: [], length: 0 }
console.log(getCharacterFrequencies(12345)); //Error: The provided value is not a string!
