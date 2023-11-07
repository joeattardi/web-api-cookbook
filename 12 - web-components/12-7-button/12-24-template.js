/**
 * Example 12-24. The button template
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background: #333;
      padding: 0.5em 1.25em;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      color: white;
    }

    button.primary {
      background: #2563eb;
    }

    button.danger {
      background: #dc2626;
    }
  </style>

  <button>
    <slot></slot>
  </button>
`;
