const user = {};

function addUser(name) {
  user.name = name;
}

const checkUserExistence = (name) => user.name === name;

const getName = (phrase) => {
  const userName = phrase.split('hello my name is ')[1]; //['', 'name']
  return capitalizeFirstLetter(userName);
};

const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`; //benjamin -> Benjamin

const isSayHello = (command) => command.includes('hello my name is');
const askName = (command) => command.includes('what is my name');

function getReply(command) {
  const normalizedCommand = command.toLowerCase().trim();
  let response = '';
  switch (true) {
    case isSayHello(normalizedCommand):
      const userName = getName(normalizedCommand);
      if (!checkUserExistence(userName)) {
        addUser(userName);
        response = `Nice to meet you ${user.name}`;
      } else {
        response = `I already know you, ${user.name}`;
      }
      break;
    case askName(normalizedCommand):
      if (!user.name) {
        response = `It seems you haven’t introduced yourself yet! What's your name?`;
      } else {
        response = `You name is ${user.name}`;
      }
      break;

    default:
      break;
  }
  return response;
}
console.log(getReply('What is my name')); //It seems you haven’t introduced yourself yet! What's your name?
console.log(getReply('Hello my name is Benjamin')); //Nice to meet you Benjamin
console.log(getReply('Hello my name is Benjamin')); //I already know you, Benjamin
console.log(getReply('What is my name')); //Your name is Benjamin

console.log(user);
