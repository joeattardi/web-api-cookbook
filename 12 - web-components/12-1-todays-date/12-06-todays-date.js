/**
 * Example 12-1. A custom element that formats the current date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class TodaysDate extends HTMLElement {
  connectedCallback() {
    const format = new Intl.DateTimeFormat(
      navigator.language,
      { dateStyle: 'full' }
    );

    this.textContent = format.format(new Date());
  }
}

customElements.define('todays-date', TodaysDate);
