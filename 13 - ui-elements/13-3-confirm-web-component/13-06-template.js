/**
 * Example 13-6. The template for the confirmation dialog component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const template = document.createElement('template');
template.innerHTML = `
  <dialog id="confirm">
    <h2>Confirm</h2>
    <p><slot></slot></p>

    <button type="button" class="confirm-button">Confirm</button>
    <button type="button" class="cancel-button">Cancel</button>
  </dialog>
`;
