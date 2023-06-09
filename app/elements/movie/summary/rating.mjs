export default function MovieSummaryRating ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { vote_average } = movie
  return html`
    <style>
    :host p {
        color: var(--palette-warning-main);
    }
    </style>
    <p class="text-1 font-bold leading-none uppercase">${vote_average}</p>
  `
}

