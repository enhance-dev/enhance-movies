export default function MovieTrailerModal({ html, state }) {
  const { attrs } = state
  const { movie_id, embedded, trailer } = attrs

  return html`
    <style>
      :host {
        --aspect-ratio: 16 / 9;
      }

      iframe {
        aspect-ratio: var(--aspect-ratio);
      }
    </style>
    <movie-dialog data-movie="${movie_id}">
      <secondary-link-button href="${trailer}" data-movie="${movie_id}" slot="trigger">
        Trailer
        <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <use xlink:href="#svg-play-button">
        </svg>
      </secondary-link-button>
      <iframe slot="content" allowfullscreen allow="fullscreen; autoplay" src="${embedded}" loading="lazy" class="si-100 sb-100"></iframe>
    </movie-dialog>
  `
}
