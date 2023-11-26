/**
 * Example 15-8. Measuring rendering performance with data
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Create the initial performance mark just before rendering
window.performance.mark('render-start');

// Create the component and render the data
const dataView = new DataView();
dataView.render(data);

// When rendering is done, create the ending performance mark.
window.performance.mark('render-end');

// Create a measure between the two marks, passing the 
// data being rendered as the measure detail.
const measure = window.performance.measure('render', {
  start: 'render-start',
  end: 'render-end',
  detail: data
});
