/**
 * Example 17-11. Waiting for the font to be loaded
 * From "Web Browser API Cookbook" by Joe Attardi
 */

roboto.load()
  .then(() => {
    // Font has been loaded and is ready for use
  });
