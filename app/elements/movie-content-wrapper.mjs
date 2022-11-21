export default function Element ({ html }) {
  return html`
    <style>
      :host {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          flex-direction: column;
      }
    </style>
    <slot></slot>
  `
}

