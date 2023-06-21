export default function MovieCollection ({ html, state }) {
  const { store } = state
  const shows = store.shows.results.map(({ id, poster_path, title, vote_average }) => `<movie-poster id="${id}" poster_path="${poster_path}" title="${title}" vote_average="${vote_average}"></movie-poster>`).join('')

  return html`
    <style>
      layout-collection {
        margin-inline: calc(var(--space-0) * -1);
        scroll-padding: var(--space-0);
        container-type: inline-size;
      }

      movie-poster {
        inline-size: clamp(140px, 18cqi, 320px);
      }
    </style>
    <layout-collection
      class='p0'
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
    >
      ${shows}
    </layout-collection>
  `
}
