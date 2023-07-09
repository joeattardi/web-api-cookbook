// Look up the element you want to observe.
const container = document.querySelector('#resize-container');

// Create a ResizeObserver that will watch the element for size changes.
const observer = new ResizeObserver(entries => {
  // The observer fires immediately, so you can set the initial text.
  // There's typically only going to be one entry in the array - the first element is the element
  // you're interested in.
  container.textContent = `My width is ${entries[0].contentRect.width}px`;
});

// Start watching the element.
observer.observe(container);
