/**
 * Example 14-6. Requesting the device location
 * From "Web Browser API Cookbook" by Joe Attardi
 */

navigator.geolocation.getCurrentPosition(position => {
  console.log('Latitude: ' + position.coords.latitude);
  console.log('Longitude: ' + position.coords.longitude);
}, error => {
  // Either the user denied permission, or the device location could not
  // be determined.
  console.log(error);
});
