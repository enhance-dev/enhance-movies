import movieGridStyle from '../lib/movie-grid-style.mjs'

export default function MovieGridClient({ html }) {
  return html`${movieGridStyle}<slot></slot>`
}
