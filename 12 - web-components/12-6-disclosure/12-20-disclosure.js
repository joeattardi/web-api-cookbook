/**
 * Example 12-20. The disclosure component implementation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class Disclosure extends HTMLElement {
  // Watch the `open` attribute to react to changes.
  static observedAttributes = ['open'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.content = this.shadowRoot.querySelector('.content');
  }

  connectedCallback() {
    this.content.hidden = !this.hasAttribute('open');
    this.shadowRoot.querySelector('.toggle-button')
      .addEventListener('click', () => {
        if (this.hasAttribute('open')) {
          // Content is currently showing; remove the `open`
          // attribute and hide the content.
          this.removeAttribute('open');
          this.content.hidden = true;
        } else {
          // Content is currently hidden; add the `open` attribute 
          // and show the content.
          this.setAttribute('open', '');
          this.content.hidden = false;
        }
      });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Update the content's hidden state based on the new attribute value.
    if (newValue !== null) {
      this.content.hidden = false;
    } else {
      this.content.hidden = true;
    }
  }
}

// The element name must be hyphenated
customElements.define('x-disclosure', Disclosure);
