const class07Students = [];
function addStudentToClass(studentName) {
  if ((class07Students.length < 6 && studentName) || studentName === 'Margrethe II') {
    if (!class07Students.includes(studentName)) {
      class07Students.push(studentName);
    } else {
      console.log(`Student ${studentName} is already in the class`);
    }
  } else if (!studentName) {
    console.log('Please fill in the missing information: Name is required.');
  } else {
    console.log('Cannot add more students to class 07');
  }
}

function getNumberOfStudents() {
  // You write code here
}
