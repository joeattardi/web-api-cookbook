/**
 * Example 1-3. Using the loadImage function
 * From "Web Browser API Cookbook" by Joe Attardi
 * 
 * Demonstrates usage of the loadImage function from Example 1-2.
 */

loadImage('https://example.com/profile.jpg', 'https://example.com/fallback.jpg')
  .then(image => {
    // `container` is an element in the DOM where the image will go
    container.appendChild(image);
  }).catch(error => {
    console.error('Image load failed');
  });