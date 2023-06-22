import languages from '../../../lib/languages.mjs'

export default function MovieSummaryDetails ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { release_date, runtime, original_language } = movie
  const year = (new Date(release_date)).getFullYear()
  const language = languages.find(lang => lang.iso_639_1 === original_language).english_name
  return html`
    <style>
    :host p {
        color: var(--palette-warning-main);
    }
    </style>
    <p class="text-1 font-bold leading-none uppercase">${language}/${runtime} min./${year}</p>
  `
}
