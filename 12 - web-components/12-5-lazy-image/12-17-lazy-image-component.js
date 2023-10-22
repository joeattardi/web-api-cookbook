/**
 * Example 12-17. The LazyImage component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

// Extend HTMLImageElement instead of HTMLElement.
class LazyImage extends HTMLImageElement {
  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // lazySrc is an attribute that has the actual image URL, which will be used
        // once the image scrolls into the viewport.
        this.src = this.getAttribute('lazySrc');
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

// When registering the element, you must declare that it extends
// the <img> tag.
customElements.define('lazy-image', LazyImage, {
  extends: 'img'
});
