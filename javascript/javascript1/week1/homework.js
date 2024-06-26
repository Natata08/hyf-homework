// Step 2
// My freecodecamp username - @Natata08

//Step 3
// Age-ify (A future age calculator)

const yearOfBirth = 1986; //number
const yearFuture = 2025; //number
const age = yearFuture - yearOfBirth;
const messageAboutFutureAge = `You will be ${age} years old in ${yearFuture}.`;

console.log(messageAboutFutureAge);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = false; //boolean
const dogYear = (dogYearFuture - dogYearOfBirth) * (shouldShowResultInDogYears ? 7 : 1);
const prefix = shouldShowResultInDogYears ? 'dog' : 'human';

const messageAboutDogAge = `Your dog will be ${dogYear} ${prefix} years old in ${dogYearFuture}.`;

console.log(messageAboutDogAge);

// Housey pricey (A house price estimator)

function estimateHousePrice(
  name,
  houseWidthInM,
  houseHeightInM,
  houseDepthInM,
  gardenSizeInM2,
  announcedHousePrice
) {
  const volumeInMeters = houseWidthInM * houseHeightInM * houseDepthInM;
  const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  const priceEstimation =
    housePrice < announcedHousePrice
      ? 'too much'
      : 'too little (or just the right amount of money)';
  const message = `${name} is paying ${priceEstimation} for this house. The real price is: ${housePrice}.`;

  console.log(message);
}

estimateHousePrice('Peter', 8, 10, 10, 100, 2500000);
estimateHousePrice('Julia', 5, 8, 11, 70, 1000000);

// Ez Namey (Startup name generator)

const firstWords = [
  'Breezy',
  'Global',
  'Corporate',
  'Quick',
  'Bright',
  'Smart',
  'Innovative',
  'Dynamic',
  'Promising',
  'Secure',
];
const secondWords = [
  'Solutions',
  'Systems',
  'Technologies',
  'Services',
  'Designs',
  'Concepts',
  'Insights',
  'Ventures',
  'Networks',
  'Analytics',
];

const randomFirstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
const randomSecondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
const charactersLength = randomFirstWord.length + randomSecondWord.length;
const startupName = `${randomFirstWord} ${randomSecondWord}`;
const startupMessage = `The startup: "${startupName}" contains ${charactersLength} characters.`;

console.log(startupMessage);
