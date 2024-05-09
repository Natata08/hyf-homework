// Adding an activity
const activities = [];

function addActivity(date, activity, duration) {
  const activityInfo = { date, activity, duration };
  activities.push(activityInfo);
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Twitter', 70);
console.log(activities); //[ { date: '23/7-18', activity: 'Youtube', duration: 30 } ]

// Show my status

function calculateTotalDuration(activities) {
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    totalDuration += activity.duration;
  }
  return totalDuration;
}

function showStatus(activities) {
  if (activities.length === 0) {
    console.log('Add some activities before calling showStatus');
  } else {
    const totalDuration = calculateTotalDuration(activities);
    const activitiesAmount = activities.length;
    console.log(
      `You have added ${activitiesAmount} activities. They amount to ${totalDuration} min. of usage`
    );
  }
}

showStatus(activities);
