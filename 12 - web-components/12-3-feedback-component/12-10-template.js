/**
 * Example 12-10. Creating the template
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .feedback-prompt {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    button {
      padding: 0.5em 1em;
    }
  </style>

  <div class="feedback-prompt">
    <p>Was this helpful?</p>
    <button type="button" data-helpful="true">Yes</button>
    <button type="button" data-helpful="false">No</button>
  </div>
`;
