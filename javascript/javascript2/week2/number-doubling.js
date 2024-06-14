const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter((num) => num % 2).map((num) => num * 2);

console.log('The doubled numbers are', newNumbers); // [2, 6]
