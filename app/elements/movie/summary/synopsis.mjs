export default function MovieSummarySynopsis ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { overview } = movie
  return html`
      <style>
        :host {
            display: block;
            margin-block-end: var(--space-2);
        }
      </style>
      <typography-h3>Synopsis</typography-h3>
      <p class="leading4">${overview}</p>
    `
}
