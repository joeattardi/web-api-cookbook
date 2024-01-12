/**
 * Example 12-17. The LazyImage component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class LazyImage extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.image = document.createElement('img');
    shadowRoot.appendChild(this.image);
  }

  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Loading image');
        this.image.src = this.getAttribute('src');
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

customElements.define('lazy-image', LazyImage);
