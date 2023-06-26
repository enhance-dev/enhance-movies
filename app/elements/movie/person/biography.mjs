export default function MoviePersonBiography ({ html, state }) {
  const { store } = state
  const { person } = store
  const { biography } = person
  return html`
        <style>
          :host {
              display: block;
              margin-block-end: var(--space-2);
          }
        </style>
        <typography-h3>Biography</typography-h3>
        <p class="leading4">${biography}</p>
      `
}
