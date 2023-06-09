export default function MovieFooter ({ html, state }) {
  const { store } = state
  return html`
<footer>
  <p>${JSON.stringify(store, null, 2)}</p>
</footer>`
}

