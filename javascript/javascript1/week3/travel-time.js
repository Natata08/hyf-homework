const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelInformation1 = {
  speed: 50,
  destinationDistance: 38,
};

function formatTimeInString(hours, minutes) {
  const hourText = hours === 1 ? 'hour' : 'hours';
  const minuteText = minutes === 1 ? 'minute' : 'minutes';
  if (hours && minutes === 0) {
    return `${hours} ${hourText}`;
  } else if (hours && minutes > 0) {
    return `${hours} ${hourText} and ${minutes} ${minuteText}`;
  } else {
    return `${minutes} ${minuteText}`;
  }
}

function calculateTravelTime(travelInformation) {
  const travelTime =
    travelInformation.destinationDistance / travelInformation.speed;
  const travelTimeHours = Math.floor(travelTime);
  const travelTimeMinutes = Math.round((travelTime - travelTimeHours) * 60);
  return formatTimeInString(travelTimeHours, travelTimeMinutes);
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
const travelTime1 = calculateTravelTime(travelInformation1);
console.log(travelTime1); // 46 minutes
