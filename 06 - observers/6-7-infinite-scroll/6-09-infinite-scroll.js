/**
 * Example 6-9. Using IntersectionObserver for infinite scrolling
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Observes a placeholder element with an IntersectionObserver.
 * When the placeholder becomes visible, more data is loaded.
 * 
 * @param placeholder The "Load More" placeholder element
 * @param loadMore A function that loads more data
 */
function observeForInfiniteScroll(placeholder, loadMore) {
  const observer = new IntersectionObserver(entries => {
    // If the placeholder becomes visible, it means the user
    // has scrolled to the bottom of the list. In this case, time to
    // load more data.
    if (entries[0].isIntersecting) {
      loadMore();
    }
  });
  
  observer.observe(placeholder);
}
