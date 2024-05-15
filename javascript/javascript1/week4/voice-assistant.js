const user = { name: null, todo: [] };

function addUser(name) {
  user.name = name;
}

function addActivity(activity) {
  if (user.todo.includes(activity)) {
    return 'You already have this activity in to-do';
  } else {
    user.todo.push(activity);
    return `${activity} added to your to-do`;
  }
}

function removeActivity(activity) {
  const indexOfRemovingActivity = user.todo.indexOf(activity);
  if (indexOfRemovingActivity >= 0) {
    user.todo.splice(indexOfRemovingActivity, 1);
    return `Removed ${activity} from your to-do`;
  } else {
    return 'There is no such activity in your to-do';
  }
}

function listTodos() {
  if (user.todo.length === 0) {
    return 'Your todo is empty';
  } else {
    const todoItems = user.todo.join(' and ');
    return `You have ${user.todo.length} todos:\n${todoItems}`;
  }
}

const checkUserExistence = (name) => user.name === name;

const getName = (sentence) => {
  const userName = sentence.split('hello my name is ')[1]; //['', 'name']
  return capitalizeFirstLetter(userName);
};

const capitalizeFirstLetter = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`; //benjamin -> Benjamin

function extractActivity(sentence, isAdding = true) {
  //extracting a word/phrase from command that follow this specific pattern
  const matchPattern = isAdding
    ? /add (.*?) to my to-do/
    : /remove (.*?) from my to-do/;
  const match = sentence.match(matchPattern);
  return match[1];
}

const isSayHello = (command) => command.includes('hello my name is');
const askName = (command) => command.includes('what is my name');
const addTodo = (command) =>
  command.startsWith('add') && command.endsWith('to my to-do');
const removeTodo = (command) =>
  command.startsWith('remove') && command.endsWith('from my to-do');
const askListTodos = (command) => command.includes('what is on my todo');

function getReply(command) {
  const normalizedCommand = command.toLowerCase().trim();
  let response = '';
  switch (true) {
    //greeting and introducing
    case isSayHello(normalizedCommand):
      const userName = getName(normalizedCommand);
      if (!checkUserExistence(userName)) {
        addUser(userName);
        response = `Nice to meet you ${user.name}`;
      } else {
        response = `I already know you, ${user.name}`;
      }
      break;

    //asking a name
    case askName(normalizedCommand):
      if (!user.name) {
        response = `It seems you haven’t introduced yourself yet! What's your name?`;
      } else {
        response = `You name is ${user.name}`;
      }
      break;

    //adding an activity to a list of todo
    case addTodo(normalizedCommand):
      const newActivity = extractActivity(normalizedCommand, true);
      response = addActivity(newActivity);
      break;

    //removing an activity from a list of todo
    case removeTodo(normalizedCommand):
      const deletingActivity = extractActivity(normalizedCommand, false);
      response = removeActivity(deletingActivity);
      break;

    //listing activities from todo
    case askListTodos(normalizedCommand):
      response = listTodos();
      break;

    default:
      response = `I didn't understand that command. Repeat, please`;
      break;
  }
  return response;
}
console.log(getReply('What is my name')); //It seems you haven’t introduced yourself yet! What's your name?
console.log(getReply('Hello my name is Benjamin')); //Nice to meet you Benjamin
console.log(getReply('Hello my name is Benjamin')); //I already know you, Benjamin
console.log(getReply('What is my name')); //Your name is Benjamin
console.log(getReply('Add fishing to my to-do')); //fishing added to your to-do
console.log(getReply('Add fishing to my to-do')); //You already have this activity in to-do
console.log(getReply('Add singing in the shower to my to-do')); //singing in the shower added to your to-do
console.log(getReply('Remove fishing from my to-do')); //Removed fishing from your to-do
console.log(getReply('Remove shopping from my to-do')); //There is no such activity in your to-do
console.log(getReply('Add shopping to my to-do')); //shopping added to your to-do
console.log(listTodos());
// You have 2 todos:
// singing in the shower and shopping

console.log(user);
