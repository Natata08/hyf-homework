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
  let message;
  if (housePrice < announcedHousePrice) {
    message = name + ' is paying too much for this house. The real price is: ' + housePrice;
  } else {
    message =
      name +
      ' is paying too little (or just the right amount of money) for this house. The real price is: ' +
      housePrice;
  }
  console.log(message);
}
estimateHousePrice('Peter', 8, 10, 10, 100, 2500000);
estimateHousePrice('Julia', 5, 8, 11, 70, 1000000);
