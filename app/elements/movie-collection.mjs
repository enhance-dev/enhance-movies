export default function MovieCollection ({ html, state }) {
  const { store } = state
  const shows = store.shows.results.map(({ id, poster_path, title, vote_average }) => `<movie-poster id='${id}' poster_path='${poster_path}' title='${title}' vote_average='${vote_average}'></movie-poster>`).join('')

  return html`
    <style>
      layout-collection {
        margin-inline: calc(var(--space-0) * -1);
        scroll-padding: var(--space-0);
        container-type: inline-size;
        animation: 2s fadein var(--easeOutQuint), 1s slide var(--easeOutQuint);
        animation-delay: 0.25s;
        animation-fill-mode: both;
      }

      movie-poster {
        inline-size: clamp(140px, 18cqi, 320px);
      }
    </style>
    <layout-collection
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
    >
      ${shows}
    </layout-collection>
  `
}
