export default function MovieSummarySynopsis ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { overview } = movie
  return html`
      <style>
        :host {
            display: block;
            margin-bottom: 1.5rem;
        }
        :host p {
            text-align: justify;
        }
      </style>
      <typography-h3>The Synopsis</typography-h3>
      <p class="text-1 font-medium leading4">${overview}</p>
    `
}
