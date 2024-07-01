//task 1
setTimeout(() => {
  console.log('Called after 2.5 seconds');
}, 2500);

//task 2
function logStringAfterDelay(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
logStringAfterDelay(5, 'This string logged after 5 seconds');
logStringAfterDelay(3, 'This string logged after 3 seconds');
logStringAfterDelay(7, 'This string logged after 7 seconds');

//task 3
document.getElementById('btn').addEventListener('click', () => {
  logStringAfterDelay(5, 'Called after 5 seconds');
});

//task 4
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');

function callPlanetLogFunction(planetLogFunction) {
  planetLogFunction();
}

callPlanetLogFunction(earthLogger); //Earth
callPlanetLogFunction(saturnLogger); //Saturn

//task 5
document.getElementById('btnLocation').addEventListener('click', showLocation);

function showLocation() {
  const containerLocation = document.getElementById('location');
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    containerLocation.innerHTML = `<p>This is the latitude ${latitude}</p><p>This is the longitude ${longitude}</p>`;
  }
  function error() {
    containerLocation.innerHTML = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    containerLocation.textContent =
      'Geolocation is not supported by your browser';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

//task 6
