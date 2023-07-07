export default function MovieSummaryLinks ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { homepage, imdb_id, trailer, id } = movie
  const embeddedTrailerUrl = trailer?.key && `https://www.youtube.com/embed/${trailer.key}?rel=0&autoplay=0&showinfo=0`
  const trailerUrl = `https://www.youtube.com/embed/${trailer?.key}?rel=0&autoplay=0&showinfo=0`

  return html`
    <div class="flex gap-2 mie-auto">
        ${homepage && `<secondary-link-button href="${homepage}">
            Website
            <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-link">
            </svg>
        </secondary-link-button>`}
        ${imdb_id && `<secondary-link-button href="https://www.imdb.com/title/${imdb_id}/">
            IMDB
            <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-imdb">
            </svg>
        </secondary-link-button>`}
        ${trailer?.key ? `<movie-trailer-modal embedded="${embeddedTrailerUrl}" trailer="${trailerUrl}" movie_id=${id}"></movie-trailer-modal>` : ''}
    </div>
  `
}
