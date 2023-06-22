export default function MovieGrid ({ html, state }) {
  const { store } = state
  const shows = store.shows.results.map(({ id, poster_path, title, vote_average }) => `<movie-poster id="${id}" poster_path="${poster_path}" title="${title}" vote_average="${vote_average}"></movie-poster>`).join('')

  return html`
    <style>
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(12.5%, 250px), 1fr));
        grid-gap: 2rem 1rem;
        justify-content: space-evenly;
        align-content: space-between;
        align-items: start;
        margin: 2rem 0;
      }
    </style>
      ${shows}
    <slot></slot>
  `
}
