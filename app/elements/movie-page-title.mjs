export default function MoviePageTitle ({ html, state }) {
  const { store } = state
  const { title = {} } = store
  let { primary, secondary } = title

  primary = primary.charAt(0).toUpperCase() + primary.substring(1)
  secondary = secondary.charAt(0).toUpperCase() + secondary.substring(1)

  return html`
  <h1 class="text2 font-medium">${primary} ${secondary}</h1>
`
}
