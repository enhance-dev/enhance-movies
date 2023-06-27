export default function MoviePageTitle ({ html, state }) {
  const { store } = state
  const { title = {}, shows } = store
  const { primary, secondary } = title

  const content = shows.length
    ? `<h1 class="text2 font-medium">${primary} ${secondary}</h1>`
    : ``

  return html`
    ${content}
  `
}
