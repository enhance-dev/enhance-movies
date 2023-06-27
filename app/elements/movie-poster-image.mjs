export default function MoviePosterImage ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { poster_path, title } = movie
  return html`
    <movie-image src="${poster_path ? `https://image.tmdb.org/t/p/w780${poster_path}` : '/_public/generic-movie.jpg'}" alt="${title}"></movie-image>
`
}
