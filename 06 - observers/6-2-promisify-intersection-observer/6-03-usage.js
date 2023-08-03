/**
 * Example 6-3. Using the waitForElement helper to lazily load an image
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function lazyLoad(img, url) {
  waitForElement(img)
    .then(() => img.src = url)
}
