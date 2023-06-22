export default function MovieContentWrapper ({ html }) {
  return html`
    <style>
      :host {
          padding-bottom: var(--space-4);
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
