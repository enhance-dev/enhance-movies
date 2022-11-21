export default function Element ({ html, state }) {
  const { store } = state
  const { title = {} } = store
  const { primary, secondary } = title
  return html`
  <style>
    :host {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
  </style>
  <h1 class="text1 tracking-2 font-bold">${primary}</h1>
  <h2 class="text-1 font-light">${secondary}</h2>
`
}

