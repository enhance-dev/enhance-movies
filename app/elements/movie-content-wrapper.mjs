export default function MovieContentWrapper ({ html }) {
  return html`
    <style>
      :host {
          padding-top: 72px;
          padding-bottom: 4rem;
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

