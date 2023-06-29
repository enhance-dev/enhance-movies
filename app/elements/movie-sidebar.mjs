export default function MovieSidebar ({ html, state }) {
  const { store } = state
  const { genres, activeRoute } = store

  const isActive = routeName => activeRoute === routeName ? 'active' : ''

  return html`
    <style>
        :host {
            min-height: 100vh;
        }

        a {
          margin-inline-start: var(--space--);
          margin-block: var(--space--10);
          padding-block: var(--space--6);
          padding-inline: var(--space--2);
          border-radius: 0.5em;
        }

        a:hover,
        a:focus {
          outline: 2px solid var(--pink-700);
        }

        .active {
          outline-offset: 2px;
          background: linear-gradient(to right, var(--pink-700), transparent);
        }

        @media (prefers-color-scheme: light) {
          .active {
            background: linear-gradient(to right, var(--pink-600), transparent);
          }
        }
    </style>
    <div class="p0 flex">
        <nav>
            <h2 class="font-bold">Discover</h2>
            <ul class="list-none mbe0">
                <li><a class="inline-block ${isActive('all')}" href="/">All</a></li>
                <li><a class="inline-block ${isActive('popular')}" href="/discover?category=popular&page=1">Popular</a></li>
                <li><a class="inline-block ${isActive('top_rated')}" href="/discover?category=top_rated&page=1">Top Rated</a></li>
                <li><a class="inline-block ${isActive('upcoming')}" href="/discover?category=upcoming&page=1">Upcoming</a></li>
            </ul>
            <h2 class="font-bold">Genres</h2>
            <ul class="list-none pis-none">
                ${genres.map(genre => `
                  <li>
                    <a
                      href="genre?id=${genre.id}&name=${genre.name}&page=1"
                      class="${isActive(genre.name)} inline-block"
                    >
                      ${genre.name}
                    </a>
                  </li>
                `).join('')}
            </ul>
        </nav>
    </div>
`
}
