// Adding an activity
const activities = [];
const usageLimitInMin = 100;

function getCurrentFormattedDate() {
  const options = {
    year: '2-digit', // reduce the year to the last two digits
    month: '2-digit', // use two digits for the month
    day: '2-digit', // use two digits for the day
  };
  return new Date().toLocaleDateString('en-GB', options);
}

function addActivity(activity, duration) {
  const date = getCurrentFormattedDate();
  const activityInfo = { date, activity, duration };
  activities.push(activityInfo);
}

addActivity('Youtube', 30);
addActivity('Twitter', 70);
console.log(activities); //[{ date: '5/9/2024', activity: 'Youtube', duration: 30 }, { date: '5/9/2024', activity: 'Twitter', duration: 70 }]

// Show my status
function calculateTotalDuration(activities) {
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    totalDuration += activity.duration;
  }
  return totalDuration;
}

const isOverLimit = (limit, userDuration) => limit < userDuration;

function showStatus(activities) {
  if (activities.length === 0) {
    console.log('Add some activities before calling showStatus');
  } else {
    const totalDuration = calculateTotalDuration(activities);
    const activitiesAmount = activities.length;
    console.log(
      isOverLimit(usageLimitInMin, totalDuration)
        ? 'You have reached your limit, no more smartphoning for you!'
        : `You have added ${activitiesAmount} activities. They amount to ${totalDuration} min. of usage`
    );
  }
}

showStatus(activities); //You have added 2 activities. They amount to 100 min. of usage
addActivity('Instagram', 40);
showStatus(activities); //You have reached your limit, no more smartphoning for you!
