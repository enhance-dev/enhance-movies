export default function MovieSummaryLinks ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { homepage, imdb_id, trailer } = movie
  return html`
    <style>
      :host {
          display: flex;
          align-items: center;
      }
      :host div>*:not(:last-child) {
        margin-right: 0.5rem;
      }
    </style>
    <div class="flex mie-auto">
        ${homepage && `<movie-button href="${homepage}" label="Website" remote>
            <svg slot="icon" height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-link">
            </svg>
        </movie-button>`}
        ${imdb_id && `<movie-button href="https://www.imdb.com/title/${imdb_id}/" label="IMDB" remote>
            <svg slot="icon" height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-imdb">
            </svg>
        </movie-button>`}
        ${trailer?.key && `<movie-button href="https://www.youtube.com/watch?v=${trailer.key}/" label="Trailer" remote>
            <svg slot="icon" height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-play-button">
            </svg>
        </movie-button>`}
    </div>
    <movie-button href="/" label="Back">

    </movie-button>
  `
}
