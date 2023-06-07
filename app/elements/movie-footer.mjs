export default function Element ({ html, state }) {
  const { store } = state
  return html`
<footer>
  <pre>${JSON.stringify(store, null, 2)}</pre>
</footer>`
}

