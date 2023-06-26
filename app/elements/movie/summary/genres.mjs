export default function MovieSummaryGenres ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { id, genres = [] } = movie
  return html`
    <style>
      :host {
          display: block;
          margin-block-end: var(--space-2);
      }
    </style>
    <typography-h3>Genres</typography-h3>
    <p class="flex flex-wrap align-items-center">
        ${genres.map(genre => `<a class="flex align-items-center mie0 text-2 tracking2 font-bold uppercase" href="/genre?id=${id}&name=${genre.name}&page=1"><svg height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <use xlink:href="#svg-play">
          </svg>${genre.name}</a>`).join('')}
    </p>
  `
}
