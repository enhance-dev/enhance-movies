export default function MoviePersonTitle ({ html, state }) {
  const { store } = state
  const { person = {} } = store
  const { name, birthday } = person
  return html`
    <style>
      :host {
          display: block;
          margin-bottom: 1rem;
      }
    </style>
    <h1 class="text2 tracking-2 font-bold mb-5 leading1 uppercase">${name}</h1>
    <h2 class="text-1 font-light uppercase">${birthday}</h2>
  `
}

