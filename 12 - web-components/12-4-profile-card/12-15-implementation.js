/**
 * Example 12-15. The component implementation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class ProfileCard extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('profile-card', ProfileCard);
