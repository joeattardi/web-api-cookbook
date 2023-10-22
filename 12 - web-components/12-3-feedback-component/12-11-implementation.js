/**
 * Example 12-11. The component implementation
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class FeedbackRating extends HTMLElement {
  connectedCallback() {
    // Create the shadow DOM and render the template into it
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    shadowRoot.querySelector('.feedback-prompt').addEventListener('click', event => {
      const { helpful } = event.target.dataset;
      // console.log(event.target.dataset.helpful);

      if (typeof helpful !== 'undefined') {
        // Once a feedback option is chosen, hide the buttons and show a confirmation
        shadowRoot.querySelector('.feedback-prompt').remove();
        shadowRoot.textContent = 'Thanks for your feedback!';

        // JavaScript doesn't have a 'parseBoolean' type function, so convert the string value
        // to the corresponding boolean value.
        this.helpful = helpful === 'true';

        // Dispatch a custom event, so your app can be notified when a feedback button
        // is clicked.
        shadowRoot.dispatchEvent(new CustomEvent('feedback', {
          composed: true, // this is needed to "escape" the shadow DOM boundary
          bubbles: true // this is needed to propagate up the DOM
        }));
      }
    });
  }
}

customElements.define('feedback-rating', FeedbackRating);
