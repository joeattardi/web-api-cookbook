/**
 * Example 12-19. The disclosure component template
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <button type="button" class="toggle-button">
      <slot name="title"></slot>
    </button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
`;
