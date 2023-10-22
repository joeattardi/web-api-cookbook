/**
 * Example 12-8. A custom date component
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class DateFormatter extends HTMLElement {
  // The browser will only notify the component about changes, via the
  // attributeChangedCallback, for attributes that are listed here.
  static observedAttributes = ['date'];

  constructor() {
    super();

    // Create the format here so you don't have to
    // re-create it every time the date changes.
    this.format = new Intl.DateTimeFormat(
      navigator.language, 
      { dateStyle: 'full' }
    );
  }

  /**
   * Formats the date represented by the current value of the `date`
   * attribute, if any.
   */
  formatDate() {
    if (this.hasAttribute('date')) {
      this.textContent = this.format.format(
        new Date(this.getAttribute('date'))
      );
    } else {
      // Handle the case where there is no date specified
      this.textContent = '(no date)';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Only watching one attribute, so this must be a change
    // to the date attribute. Update the formatted date, if any.
    this.formatDate();
  }

  connectedCallback() {
    // The element was just added. Show the initial formatted date, if any.
    this.formatDate();
  }
}

customElements.define('date-formatter', DateFormatter);
