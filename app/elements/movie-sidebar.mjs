export default function MovieSidebar ({ html, state }) {
  const { store } = state
  const { genres } = store
  return html`
    <style>
        :host {
            padding-top: 72px;
            min-height: 100vh;
        }
    </style>
    <div class="p0 flex">
        <nav>
            <h2>Discover</h2>
            <ul class="list-none">
                <li><a href="/?category=popular&page=1">Popular</a></li>
                <li><a href="/?category=top_rated&page=1">Top Rated</a></li>
                <li><a href="/?category=upcoming&page=1">Upcoming</a></li>
            </ul>
            <h2>Genres</h2>
            <ul class="list-none">
                ${genres.map(genre => `<li><a href="genre?id=${genre.id}&name=${genre.name}&page=1">${genre.name}</a></li>`).join('')}
            </ul>
        </nav>
    </div>
`
}

