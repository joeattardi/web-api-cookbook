/**
 * Example 12-25. The button component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class StyledButton extends HTMLElement {
  static observedAttributes = ['variant', 'type'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.button = this.shadowRoot.querySelector('button');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'variant') {
      this.button.className = newValue;
    } else if (name === 'type') {
      this.button.type = newValue;
    }
  }
}

customElements.define('styled-button', StyledButton);
