// Flight booking fullName function

function getFullName(firstName, surname, useFormalName = false, isWoman = false) {
  if (
    typeof firstName !== 'string' ||
    typeof surname !== 'string' ||
    firstName === '' ||
    surname === ''
  ) {
    return 'Please fill in the missing information: First Name and Surname are required.';
  } //checking that firstName and surname are not empty strings

  const fullName = `${firstName} ${surname}`;

  if (!useFormalName) {
    return fullName;
  } else {
    const title = isWoman ? 'Lady' : 'Lord';
    return `${title} ${fullName}`;
  }
}

const fullName1 = getFullName('Mary', 'Jones', true, true);
const fullName2 = getFullName('William', 'Smith');
const fullName3 = getFullName('', 'Smith');

console.log(fullName1); //"Lady Mary Jones"
console.log(fullName2); //"William Smith"
console.log(fullName3); //Please fill in the missing information: First Name and Surname are required.
