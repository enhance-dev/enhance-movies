export default function MoviePersonLinks ({ html, state }) {
  const { store } = state
  const { person = {} } = store
  const { homepage, imdb_id } = person
  return html`
    <div class="flex gap-2 mie-auto">
        ${homepage && `<secondary-link-button href="${homepage}">
            Website
            <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-link">
            </svg>
        </secondary-link-button>`}
        ${imdb_id && `<secondary-link-button href="https://www.imdb.com/name/${imdb_id}/">
            IMDB
            <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <use xlink:href="#svg-imdb">
            </svg>
        </secondary-link-button>`}
    </div>
  `
}
