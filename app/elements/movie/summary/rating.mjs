export default function MovieSummaryRating ({ html, state }) {
  const { store } = state
  const { movie } = store
  let { vote_average } = movie

  if (vote_average === 0){
    vote_average = 'Not yet rated'
  } else {
    vote_average = vote_average.toFixed(1)
  }

  return html`
    <p class="text-1 font-bold uppercase">☆ ${vote_average}</p>
  `
}
