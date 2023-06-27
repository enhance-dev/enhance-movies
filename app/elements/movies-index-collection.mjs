export default function MovieCollection ({ html, state }) {
  const { store } = state

  const renderPoster = (({ id, poster_path, title, vote_average }) => `
    <movie-poster
      id="${id}"
      poster_path="${poster_path}"
      title="${title}"
      vote_average="${vote_average}"
    ></movie-poster>
  `)

  const popular = store.popular.results.map(renderPoster).join('')
  const topRated = store.topRated.results.map(renderPoster).join('')
  const upcoming = store.upcoming.results.map(renderPoster).join('')

  return html`
    <style>
      layout-collection {
        margin-inline: calc(var(--space-0) * -1);
        scroll-padding: var(--space-0);
        container-type: inline-size;
        animation: 2s fadein var(--easing), 1s slide var(--easing);
        animation-delay: 0.25s;
        animation-fill-mode: both;
      }

      movie-poster {
        inline-size: clamp(140px, 18cqi, 320px);
      }
    </style>

    <h1 class="text2 font-medium">Popular</h1>
    <layout-collection
      class='p0 mbe0'
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
    >
      ${popular}
    </layout-collection>

    <h1 class="text2 font-medium">Top rated</h1>
    <layout-collection
      class='p0 mbe0'
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
    >
      ${topRated}
    </layout-collection>

    <h1 class="text2 font-medium">Upcoming</h1>
    <layout-collection
      class='p0'
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
    >
      ${upcoming}
    </layout-collection>
  `
}
