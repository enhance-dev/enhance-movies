export default function MoviePersonLinks ({ html, state }) {
  const { store } = state
  const { person = {} } = store
  const { homepage, imdb_id } = person
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
        ${imdb_id && `<movie-button href="https://www.imdb.com/name/${imdb_id}/" label="IMDB" remote>
            <svg slot="icon" height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-imdb">
            </svg>
        </movie-button>`}
    </div>
    <movie-button href="/" label="Back"></movie-button>
  `
}
