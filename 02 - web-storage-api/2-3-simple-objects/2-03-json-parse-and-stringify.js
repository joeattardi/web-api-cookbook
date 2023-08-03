/**
 * Example 2-3. Using JSON.parse and JSON.stringify
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Given a user profile object, serialize it to JSON and store it in local storage.
 * @param userProfile the profile object to save
 */
function saveProfile(userProfile) {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

/**
 * Loads the user profile from local storage, and deserializes the JSON back to
 * an object. If there is no stored profile, an empty object is returned.
 * @returns the stored user profile, or an empty object
 */
function loadProfile() {
  // If there is no stored `userProfile` value, this will return `null`. In this case,
  // use the default value of an empty object.
  return JSON.parse(localStorage.getItem('userProfile')) || {};
}
