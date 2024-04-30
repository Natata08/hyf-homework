// Flight booking fullname function

function getFullname(firstname, surname, useFormalName = false) {
  if (firstname && surname) {
    const fullname = `${firstname} ${surname}`;
    const fullnameFormal = useFormalName ? `${title} ${fullname}` : fullname;
    return fullnameFormal;
  } else {
    alert('Please fill in the missing information: First Name and Surname are required.');
  }
}

const fullname1 = getFullname('Tom', 'Jones', true);
const fullname2 = getFullname('', 'Smith', false);

console.log(fullname1);
console.log(fullname2);
