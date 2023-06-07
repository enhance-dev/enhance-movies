export default function Element ({ html, state }) {
  const { attrs, store } = state
  const { width } = attrs
  const { movie } = store
  const { poster_path, title } = movie
  return html`
    <movie-image src="https://image.tmdb.org/t/p/w${width}${poster_path}" alt="${title}"></movie-image>
`
}
