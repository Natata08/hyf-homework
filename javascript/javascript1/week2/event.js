// Event application

function getEventWeekday(daysUntilEvent) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const eventDay = new Date(today.setDate(today.getDate() + daysUntilEvent));
  const weekDayNumber = eventDay.getDay();
  return weekDays[weekDayNumber];
}
