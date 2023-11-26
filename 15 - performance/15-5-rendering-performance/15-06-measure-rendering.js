/**
 * Example 15-6. Measuring rendering performance
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Create the initial performance mark just before rendering
window.performance.mark('render-start');

// Create the component and render the data
const dataView = new DataView();
dataView.render(data);

// When rendering is done, create the ending performance mark.
window.performance.mark('render-end');

// Create a measure between the two marks.
const measure = window.performance.measure('render', 'render-start', 'render-end');
