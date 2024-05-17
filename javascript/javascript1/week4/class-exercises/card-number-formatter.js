const groupSize = 4; //'1234 5678 9123 4..'

function formatCreditCardNumber(number) {
  if (typeof number !== 'number') {
    console.log('Error: The provided value is not a number!');
    return;
  }
  const stringFromNumber = String(number);
  const output = [];
  //extracting chunks of 'groupSize' numbers and push them into array
  for (let i = 0; i < stringFromNumber.length; i = i + groupSize) {
    output.push(stringFromNumber.slice(i, i + groupSize));
  }
  const formatted = output.join(' ');
  return { original: number, formatted };
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/

console.log(formatCreditCardNumber(123456789123456789));
// {
//   original: 123456789123456780,
//   formatted: '1234 5678 9123 4567 80'
// }
console.log(formatCreditCardNumber('19123456789')); //Error: It's not a number!
