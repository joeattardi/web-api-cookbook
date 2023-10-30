/**
 * Example 12-15. The component implementation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('profile-card', ProfileCard);
