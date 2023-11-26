/**
 * Example 14-7. Creating a map iframe
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Assuming you have a placeholder element in the page with the ID `map`
const map = document.querySelector('#map');

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  // Adjust the iframe size as desired
  const iframe = document.createElement('iframe');
  iframe.width = 450;
  iframe.height = 250;

  // The map type is part of the URL path
  const url = new URL('https://www.google.com/maps/embed/v1/place');

  // The `key` parameter contains your API key
  url.searchParams.append('key', 'YOUR_GOOGLE_MAPS_API_KEY');

  // The `q` parameter contains the latitude and longitude coordinates
  // separated by a comma.
  url.searchParams.append('q', `${latitude},${longitude}`);
  iframe.src = url;

  map.appendChild(iframe);
});
