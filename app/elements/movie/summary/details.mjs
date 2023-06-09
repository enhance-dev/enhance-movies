export default function MovieSummaryDetails ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { release_date, runtime, spoken_languages } = movie
  const year = (new Date(release_date)).getFullYear()
  const lang = spoken_languages[0].name
  return html`
    <style>
    :host p {
        color: var(--palette-warning-main);
    }
    </style>
    <p class="text-1 font-bold leading-none uppercase">${lang}/${runtime} MIN./${year}</p>
  `
}

