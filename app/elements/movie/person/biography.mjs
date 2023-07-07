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
        <h2 class='text-1 font-bold mb-2 uppercase tracking1'>Biography</h2>
        <p class="leading4">${biography}</p>
      `
}
