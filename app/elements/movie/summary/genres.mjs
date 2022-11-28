export default function Element ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { id, genres = [] } = movie
  return html`
    <style>
      :host {
          display: block;
          margin-bottom: 1.5rem;
      }
    </style>
    <typography-h3>The Genres</typography-h3>
    <p class="flex flex-wrap items-center">
        ${genres.map(genre => `<a class="flex items-center mr0 pt-5 pb-5 text-2 font-bold uppercase" href="/genre?id=${id}&name=${genre.name}&page=1"><svg viewBox="0 0 512 512" fill="currentColor" width="1.25em" style="margin-right: 4px;"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>${genre.name}</a>`).join('')}
    </p>
  `
}
