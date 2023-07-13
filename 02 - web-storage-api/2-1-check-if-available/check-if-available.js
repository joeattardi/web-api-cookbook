function isLocalStorageAvailable() {
  try {
    // Local storage is available if the property exists
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    // If window.localStorage exists but the user is blocking local 
    // storage, the attempting to read the property throws an exception.
    // If this happens, consider local storage not available.
    return false;
  }
}
