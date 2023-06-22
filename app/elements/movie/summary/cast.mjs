export default function MovieSummaryCast ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { cast = [] } = movie
  return html`
      <style>
        :host {
            display: block;
            margin-bottom: 2.5rem;
            max-width: 100%;
        }
        :host a {
            width: 4rem;
            aspect-ratio: 1 / 1;
            border-radius: 4rem;
        }
        :host a:hover,
        :host a:focus {
          outline: 2px solid var(--pink-500);
          outline-offset: 2px;
        }
        .cast-container {
          margin-inline: calc(var(--space--6) * -1);
          padding-inline: var(--space--6);
        }
      </style>
      <typography-h3>The Cast</typography-h3>
        <div class="flex pb-4 gap0 cast-container overflow-x-scroll">
            ${cast.map(actor => `<a href="/person?id=${actor.id}&page=1" class="block flex-shrink-0 overflow-hidden">
              <img alt="${actor.name}" src="https://image.tmdb.org/t/p/w185${actor.profile_path}" class="object-cover">
            </a>`).join('')}
        </div>
    `
}
