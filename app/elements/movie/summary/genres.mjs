export default function MovieSummaryGenres ({ html, state }) {
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
    <p class="flex flex-wrap align-items-center">
        ${genres.map(genre => `<a class="flex align-items-center mie0 pt-5 pb-5 text-2 font-bold uppercase" href="/genre?id=${id}&name=${genre.name}&page=1"><svg height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <use xlink:href="#svg-play">
          </svg>${genre.name}</a>`).join('')}
    </p>
  `
}
