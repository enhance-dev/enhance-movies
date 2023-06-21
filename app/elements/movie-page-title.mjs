export default function MoviePageTitle ({ html, state }) {
  const { store } = state
  const { title = {} } = store
  const { primary, secondary } = title

  return html`
  <h1 class="text2 font-medium">${primary} ${secondary}</h1>
`
}
