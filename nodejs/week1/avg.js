const arguments = process.argv.slice(2);

const parseArguments = (arguments) => {
  return arguments.reduce(
    (acc, arg) => {
      const num = parseFloat(arg);
      if (!isNaN(num)) {
        acc.validArguments.push(num);
      } else {
        acc.invalidArguments.push(arg);
      }
      return acc;
    },
    { validArguments: [], invalidArguments: [] }
  );
};

const calculateAverage = (numbers) =>
  numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

const produceAverageOutput = (validArguments, invalidArguments) => {
  if (validArguments.length === 0) {
    return 'No numbers provided';
  }
  if (invalidArguments.length !== 0) {
    console.log(
      `Warning: The following arguments are not valid numbers and will be ignored: ${invalidArguments.join(
        ', '
      )}`
    );
  }
  return calculateAverage(validArguments);
};

const { validArguments, invalidArguments } = parseArguments(arguments);
console.log(produceAverageOutput(validArguments, invalidArguments));
