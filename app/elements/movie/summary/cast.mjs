export default function Element ({ html, state }) {
  const { store } = state
  const { movie } = store
  const { cast = [] } = movie
  return html`
      <style>
        :host {
            display: block;
            margin-bottom: 2.5rem;
        }
        :host a {
            height: auto;
            width: 67.8889px;
            display: block;
            min-width: 70px;
        }
        :host img {
            height: 44px;
            width: 44px;
            max-width: 100%;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
        }
      </style>
      <typography-h3>The Cast</typography-h3>
      <div class="si-100">
        <div class="overflow-hidden">
        <div class="flex" style="width: ${67.8889 * cast.length}">
            ${cast.map(actor => `<a href="/person?id=${actor.id}&page=1" class="background-transparent">
              <img alt="${actor.name}" src="https://image.tmdb.org/t/p/w185${actor.profile_path}" class="object-cover">
            </a>`).join('')}
        </div>
        </div>
      </div>
    `
}
