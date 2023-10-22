/**
 * Example 12-14. The profile card template
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: grid;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 8px;
      grid-template-columns: auto 1fr;
      column-gap: 16px;
      align-items: center;
      margin: 1rem;
    }

    .photo {
      border-radius: 50%;
      grid-row: 1 / span 3;
    }

    .name {
      font-size: 2rem;
      font-weight: bold;
    }

    .title {
      font-weight: bold;
    }
  </style>

  <div class="photo"><slot name="photo"></slot></div>
  <div class="name"><slot name="name"></slot></div>
  <div class="title"><slot name="title"></slot></div>
  <div class="bio"><slot></slot></div>
`;
