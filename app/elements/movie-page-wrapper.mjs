export default function MoviePageWrapper ({ html }) {
  return html`
    <style>
      :host {
          width: 100%;
      }
    </style>
    <slot></slot>
  `
}

