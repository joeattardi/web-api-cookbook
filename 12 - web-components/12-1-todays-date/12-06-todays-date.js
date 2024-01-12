/**
 * Example 12-6. A custom element that formats the current date
 * From "Web Browser API Cookbook" by Joe Attardi
 */

class TodaysDate extends HTMLElement {
  connectedCallback() {
    const formatter = new Intl.DateTimeFormat(
      navigator.language,
      { dateStyle: 'full' }
    );

    this.textContent = formatter.format(new Date());
  }
}

customElements.define('todays-date', TodaysDate);
