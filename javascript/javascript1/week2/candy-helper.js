//Candy helper

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let pricePerGram;
  switch (candyType) {
    case 'sweet':
      pricePerGram = 0.5;
      break;
    case 'chocolate':
      pricePerGram = 0.7;
      break;
    case 'toffee':
      pricePerGram = 1.1;
      break;
    case 'chewing-gum':
      pricePerGram = 0.03;
      break;
    default:
      pricePerGram = 0;
      console.log('The cost of this candy is unknown');
  }
  const price = weight * pricePerGram;
  boughtCandyPrices.push(price);
}

function canBuyMoreCandy() {
  let totalPrice = 0;
  let i = 0;
  while (i < boughtCandyPrices.length) {
    totalPrice += boughtCandyPrices[i];
    i++;
  }
  const answer = totalPrice < amountToSpend; //boolean
  if (answer) {
    console.log('You can buy more, so please do!');
  } else {
    console.log('Enough candy for you!');
  }
  return answer;
}
