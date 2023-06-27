export default function MovieGrid ({ html, state }) {
  const { store } = state
  const shows = store.shows.results.map(({ id, poster_path, title, vote_average }) => `<movie-poster id="${id}" poster_path="${poster_path}" title="${title}" vote_average="${vote_average}"></movie-poster>`).join('')

  return html`
    <style>
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(12.5%, 250px), 1fr));
        grid-gap: var(--space-2) var(--space-0);
        justify-content: space-evenly;
        align-content: space-between;
        align-items: start;
        margin-block: var(--space-2);
        animation: 2s fadein var(--easing), 1s raise var(--easing);
        animation-delay: 0.25s;
        animation-fill-mode: both;
      }
    </style>
      ${shows}
    <slot></slot>
  `
}
