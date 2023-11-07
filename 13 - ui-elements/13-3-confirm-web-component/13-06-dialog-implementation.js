/**
 * Example 13-6. The confirmation component implementation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class ConfirmDialog extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.dialog = shadowRoot.querySelector('dialog');
    this.dialog.addEventListener('cancel', () => {
      this.dialog.returnValue = 'cancel';
    });

    shadowRoot.querySelector('.confirm-button')
      .addEventListener('click', () => {
        this.dialog.close('confirm');
      });

    shadowRoot.querySelector('.cancel-button')
      .addEventListener('click', () => {
        this.dialog.close('cancel');
      });
  }

  showModal() {
    // Pass through the call to showModal
    this.dialog.showModal();

    return new Promise(resolve => {
      // Listen for the next close event and resolve the Promise.
      // Resolve the Promise with a boolean indicating whether or not the user confirmed.
      this.dialog.addEventListener('close', () => {
        resolve(this.dialog.returnValue === 'confirm');
      }, { once: true });
    });
  }
}

customElements.define('confirm-dialog', ConfirmDialog);
