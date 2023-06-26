export default function MoviePersonTitle ({ html, state }) {
  const { store } = state
  const { person = {} } = store
  const { name, birthday } = person
  return html`
    <style>
      :host {
          display: block;
          margin-block-end: var(--space-2);
      }
    </style>
    <h1 class="text3 tracking-2 font-bold mbe-5 leading1 uppercase">${name}</h1>
    <h2 class="tracking1 font-light uppercase">${birthday}</h2>
  `
}
