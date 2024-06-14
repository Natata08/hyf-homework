const nameInput = document.getElementById('name');
const button = document.querySelector('.btn');
const animalName = document.querySelector('.spirit-animal');
const selectTrigger = document.querySelector('#triggerSelect');

let userName = '';

const spiritAnimals = [
  'The Majestic Eagle',
  'The Mystical Wolf',
  'The Powerful Bear',
  'The Fierce Tiger',
  'The Cunning Fox',
  'The Wise Owl',
  'The Graceful Deer',
  'The Transforming Butterfly',
  'The Playful Dolphin',
  'The Noble Horse',
];

function generateSpiritAnimalName() {
  return spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
}

function SpiritNameHandler() {
  userName = nameInput.value.trim();
  if (userName === '') {
    animalName.innerHTML = `Please enter your name`;
  } else {
    animalName.innerHTML = `${userName} - ${generateSpiritAnimalName()}`;
  }
}

button.addEventListener('click', SpiritNameHandler);

// Updating event listener based on selection
selectTrigger.addEventListener('change', updateTrigger);

function updateTrigger() {
  //removing all listeners
  button.removeEventListener('click', SpiritNameHandler);
  nameInput.removeEventListener('input', SpiritNameHandler);
  nameInput.removeEventListener('mouseenter', SpiritNameHandler);

  //adding listener based on dropdown selection
  const triggerType = selectTrigger.value;
  if (triggerType === 'click') {
    button.addEventListener('click', SpiritNameHandler);
  } else if (triggerType === 'input') {
    nameInput.addEventListener('input', SpiritNameHandler);
  } else if (triggerType === 'hover') {
    nameInput.addEventListener('mouseenter', SpiritNameHandler);
  }
}
