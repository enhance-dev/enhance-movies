export default function MovieSummaryRating ({ html, state }) {
  const { store } = state
  const { movie } = store
  let { vote_average } = movie
  let percent

  if (vote_average === 0){
    vote_average = 'Not yet rated'
  } else {
    vote_average = vote_average.toFixed(1)
    percent = 100 - ((vote_average / 10) * 100)
  }

  return html`
    <style>
    </style>
    <p class="flex gap-4 align-items-center text-1 font-bold uppercase">
      ${percent ? `<star-rating inset="${percent}"></star-rating>` : ''}
      ${vote_average}
    </p>
  `
}
