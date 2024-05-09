// Adding an activity
const activities = [
  { date: '03/09/24', activity: 'Twitter', duration: 150 },
  { date: '04/09/24', activity: 'Youtube', duration: 40 },
  { date: '04/09/24', activity: 'Angry Birds', duration: 30 },
]; //added activity of other days for testing showStatus with specified date
const usageLimitInMin = 130;

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
console.log(activities);
//Output:
//[
//   { date: '03/09/24', activity: 'Twitter', duration: 150 },
//   { date: '04/09/24', activity: 'Youtube', duration: 40 },
//   { date: '04/09/24', activity: 'Angry Birds', duration: 30 },
//   { date: '09/05/24', activity: 'Youtube', duration: 30 },
//   { date: '09/05/24', activity: 'Twitter', duration: 70 }
// ]

// Show my status
function calculateTotalDuration(activities) {
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    totalDuration += activity.duration;
  }
  return totalDuration;
}

const isOverLimit = (limit, userDuration) => userDuration >= limit;

function showStatus(activities, specifiedDate = getCurrentFormattedDate()) {
  const specifiedDateActivities = activities.filter((activity) => activity.date === specifiedDate);

  if (specifiedDateActivities.length === 0) {
    console.log(`No activities found for ${specifiedDate}. Add some activities!`);
  } else {
    const totalDuration = calculateTotalDuration(specifiedDateActivities);
    const activitiesAmount = specifiedDateActivities.length;
    console.log(
      isOverLimit(usageLimitInMin, totalDuration)
        ? `You have reached your limit for ${specifiedDate}, no more smartphoning for you!`
        : `You have added ${activitiesAmount} activities on ${specifiedDate}. They amount to ${totalDuration} min. of usage`
    );
  }
}

showStatus(activities); //You have added 2 activities on 09/05/24. They amount to 100 min. of usage
addActivity('Instagram', 40);
showStatus(activities); //You have reached your limit for 09/05/24, no more smartphoning for you!
showStatus(activities, '03/09/24'); //You have reached your limit for 03/09/24, no more smartphoning for you!
showStatus(activities, '04/09/24'); //You have added 2 activities on 04/09/24. They amount to 70 min. of usage

//Calculating the activity a user has spent the most time on
function getMostTimeSpentActivity(activities) {
  if (activities.length === 0) {
    console.log(`No activities found`);
    return;
  }
  //Summarize duration by activity
  const activitiesList = {};
  for (let i = 0; i < activities.length; i++) {
    const item = activities[i];
    if (activitiesList[item.activity]) {
      activitiesList[item.activity] += item.duration;
    } else {
      activitiesList[item.activity] = item.duration;
    }
  }
  // Find activity with max duration
  const activitiesNamesList = Object.keys(activitiesList);
  let maxActivity = '';
  let maxDuration = 0;
  for (const activity of activitiesNamesList) {
    if (activitiesList[activity] > maxDuration) {
      maxActivity = activity;
      maxDuration = activitiesList[activity];
    }
  }

  return `You have spent the most time on ${maxActivity} - ${maxDuration} minutes`;
}

console.log(getMostTimeSpentActivity(activities)); //You have spent the most time on Twitter - 220 minutes
