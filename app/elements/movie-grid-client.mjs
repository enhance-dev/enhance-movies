import movieGridStyle from '../browser/movie-grid-style.mjs'

export default function MovieGridClient({ html }) {
  return html`${movieGridStyle}<slot></slot>`
}
