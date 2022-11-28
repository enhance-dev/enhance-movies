export default function Element ({ html, state }) {
  const { store } = state
  const { title = {} } = store
  const { primary, secondary } = title
  return html`
  <style>
    :host {
        display: block;
        margin-bottom: 1rem;
    }
  </style>
  <h1 class="text2 tracking-2 font-bold mb-5 leading1 uppercase">${primary}</h1>
  <h2 class="text-1 font-light uppercase">${secondary}</h2>
`
}

