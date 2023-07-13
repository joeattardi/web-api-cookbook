/**
 * Takes a URL and returns an array of its query parameters.
 */
function getQueryParameters(inputUrl) {
  // Can't use an object here because there may be multiple
  // parameters with the same key, and we want to return all parameers.
  const result = [];

  const url = new URL(inputUrl);

  // Add each key/value pair to the result array
  url.searchParams.forEach((value, key) => {
    result.push({ key, value });
  });

  // Results are ready!
  return result;
}
