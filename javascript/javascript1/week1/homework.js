// Step 2
// My freecodecamp username - @Natata08

//Step 3
// Age-ify (A future age calculator)

const yearOfBirth = 1986; //number
const yearFuture = 2025; //number
const age = yearFuture - yearOfBirth;
const messageAboutFututeAge = 'You will be ' + age + ' years old in ' + yearFuture;

console.log(messageAboutFututeAge);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = false; //boolean
let messageAboutDogAge;

if (shouldShowResultInDogYears) {
  messageAboutDogAge = 'Your dog will be ' + dogYear * 7 + ' dog years old in ' + dogYearFuture;
} else {
  messageAboutDogAge = 'Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture;
}

console.log(messageAboutDogAge);
