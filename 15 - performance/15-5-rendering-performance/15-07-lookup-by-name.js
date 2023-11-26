/**
 * Example 15-7. Looking up a measure by name
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// There is only one `render` measure, so you can use
// array destructuring to get the first (and only) entry.
const [renderMeasure] = window.performance.getEntriesByName('render');
