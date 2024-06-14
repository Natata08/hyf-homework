const start = 1;
const end = 100;

function fizzBuzz(numFizz, numBuzz) {
  const output = [];
  for (let i = start; i <= end; i++) {
    if (i % numFizz === 0 && i % numBuzz === 0) output.push(`FizzBuzz`);
    else if (i % numFizz === 0) output.push(`Fizz`);
    else if (i % numBuzz === 0) output.push(`Buzz`);
    else output.push(i);
  }
  return output.join('\n');
}

console.log(fizzBuzz(4, 9));
console.log(fizzBuzz(3, 5));
