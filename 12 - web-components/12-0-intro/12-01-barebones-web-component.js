/**
 * Example 12-1. A barebones web component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Hello from MyComponent';
  }
}
