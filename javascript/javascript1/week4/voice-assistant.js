const user = {};

function addUser(name) {
  user.name = name;
  console.log(user);
}

function checkUserExistence(name) {
  return user.name === name;
}

function extractName(phrase) {
  const words = phrase.split(' ');
  const name = words[words.length - 1];
  return name;
}

function greeting(name) {
  console.log(`Nice to meet you ${name}`);
}

function getReply(command) {
  switch (command) {
    case 'Hello my name is Benjamin':
      const name = extractName(command);
      if (!checkUserExistence(name)) {
        addUser(name);
        greeting(name);
      } else {
        console.log(`I already know you, ${name}!`);
      }
      break;
    case '':
      break;
    case '':
      break;
    default:
      console.log(`...`);
  }
}

getReply('Hello my name is Benjamin'); //Nice to meet you Benjamin
getReply('Hello my name is Benjamin');
