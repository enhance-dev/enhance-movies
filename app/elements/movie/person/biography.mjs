export default function MoviePersonBiography ({ html, state }) {
  const { store } = state
  const { person } = store
  const { biography } = person
  return html`
        <style>
          :host {
              display: block;
              margin-bottom: 1.5rem;
          }
        </style>
        <typography-h3>The Biography</typography-h3>
        <p class="text-1 font-medium leading4">${biography}</p>
      `
}
