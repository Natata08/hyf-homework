// Adding an activity
const activities = [];

function addActivity(date, activity, duration) {
  const activityInfo = { date, activity, duration };
  activities.push(activityInfo);
}

addActivity('23/7-18', 'Youtube', 30);
console.log(activities); //[ { date: '23/7-18', activity: 'Youtube', duration: 30 } ]
