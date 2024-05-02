// Event application

function getEventWeekday(daysUntilEvent) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const todayIndex = today.getDay(); //returns the day of the week (0/sunday to 6/saturday) of a date
  const eventDayIndex = (todayIndex + daysUntilEvent) % 7;
  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(1));
console.log(getEventWeekday(10));
console.log(getEventWeekday(-1));
