export default function Element ({ html }) {
  return html`
    <style>
      :host {
          width: 100%;
      }
    </style>
    <slot></slot>
  `
}

