export default function MovieSummaryGenres ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { genres = [] } = movie
  return html`
    <style>
      :host {
          display: block;
          margin-block-end: var(--space-2);
      }
    </style>
    <h2 class='text-1 font-bold mb-2 uppercase tracking1'>Genres</h2>
    <p class="flex flex-wrap align-items-center">
        ${genres.map(genre => `<a class="flex align-items-center mie0 text-2 tracking2 font-bold uppercase" href="/genre?id=${genre.id}&name=${genre.name}&page=1"><svg height="16" width="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mie-6">
            <use xlink:href="#svg-play">
          </svg>${genre.name}</a>`).join('')}
    </p>
  `
}
