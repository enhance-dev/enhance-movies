import movieGridStyle from '../browser/movie-grid-style.mjs'

export default function MovieGrid ({ html, state }) {
  const { store = {} } = state
  const shows = store?.shows
    ? store.shows.results.map(({ id, poster_path, title, vote_average }) => `<movie-poster id='${id}' poster_path='${poster_path}' title='${title}' vote_average='${vote_average}'></movie-poster>`).join('')
    : ''

  return html`
    ${movieGridStyle}
    ${shows}
    <slot></slot>
  `
}
