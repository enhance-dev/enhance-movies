export default function MovieSummaryTitle ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { title, tagline } = movie
  return html`
  <style>
    :host {
        display: block;
        margin-block-end: var(--space-2);
    }
  </style>
  <h1 class="text3 tracking-1 font-bold mbs0 mbs-none-lg mbe-5 leading1 uppercase">${title}</h1>
  <h2 class="tracking1 font-light uppercase">${tagline}</h2>
`
}
