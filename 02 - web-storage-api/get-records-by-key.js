function getAll(keys) {
  const results = {};

  // Check each key in local storage.
  for (let i = 0; i < localStorage.length; i++) {

    // Get the ith key. If the keys array includes this key, add it and its value
    // to the results object.
    const key = localStorage.key(i);
    if (keys.includes(key)) {
      results[key] = localStorage.getItem(key);
    }
  }

  // `results` now has all key-value pairs that exist in local storage.
  return results;
}
