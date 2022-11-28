export default function Element ({ html }) {
  return html`
    <style>
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.5rem;
      }
    </style>
    <slot name="rating"></slot>
    <slot name="details"></slot>
  `
}

