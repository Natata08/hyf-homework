// Flight booking fullname function

function getFullname(firstname, surname, useFormalName = false, isWoman = false) {
  const maleTitle = 'Lord';
  const femaleTitle = 'Lady';

  if (firstname && surname) {
    const fullname = `${firstname} ${surname}`;
    if (!useFormalName) {
      return fullname;
    } else if (isWoman) {
      return `${femaleTitle} ${fullname}`;
    } else {
      return `${maleTitle} ${fullname}`;
    }
  } else {
    alert('Please fill in the missing information: First Name and Surname are required.');
  }
}

const fullname1 = getFullname('Mary', 'Jones', true, true);
const fullname2 = getFullname('William', 'Smith');

console.log(fullname1);
console.log(fullname2);
