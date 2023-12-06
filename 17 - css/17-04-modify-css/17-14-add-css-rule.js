/**
 * Example 17-14. Adding a CSS rule
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const [stylesheet] = document.styleSheets;
stylesheet.insertRule(`
  .some-selector {
    background-color: red;
  }
`);
