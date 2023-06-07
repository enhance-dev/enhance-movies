export default function Element ({ html, state }) {
  const { attrs, store } = state
  const { width } = attrs
  const { person } = store
  const { name, profile_path } = person
  return html`
      <movie-image src="https://image.tmdb.org/t/p/w${width}${profile_path}" alt="${name}"></movie-image>
  `
}
