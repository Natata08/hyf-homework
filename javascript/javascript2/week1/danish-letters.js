function countDanishLetters(sentence) {
  const danishLetters = ['æ', 'ø', 'å'];
  const lettersFromSentence = sentence.toLowerCase().split('');
  const letterCounter = { total: 0 };
  for (let i = 0; i < lettersFromSentence.length; i++) {
    const letter = lettersFromSentence[i];
    if (danishLetters.includes(letter)) {
      letterCounter.total++;
      letterCounter[letter] = (letterCounter[letter] || 0) + 1;
    }
  }
  return letterCounter;
}

const danishString = 'Jeg har en blå bil';
console.log(countDanishLetters(danishString)); // { total: 1, å: 1 }

const danishString2 = 'Blå grød med røde bær';
console.log(countDanishLetters(danishString2)); // { total: 4, æ: 1, ø: 2, å: 1 }

const danishString3 = 'Hvordan har du det?';
console.log(countDanishLetters(danishString3)); // { total: 0 }

const danishString4 = 'Vi mødes ved søen efter arbejde.';
console.log(countDanishLetters(danishString4)); // { total: 2, 'ø': 2 }
