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
      <h2 class='text-1 font-bold mb-2 uppercase tracking1'>Synopsis</h2>
      <p class="leading4">${overview}</p>
    `
}
