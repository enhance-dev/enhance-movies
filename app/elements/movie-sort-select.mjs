export default function MovieSortSelect ({ html, state }) {
  const { store } = state
  const { id, shows, sort_by, title } = store
  return html`
    <form class="mb-3">
        <input type="hidden" name="id" value="${id}"/>
        <input type="hidden" name="name" value="${title.primary}"/>
        <input type="hidden" name="page" value="${shows.page}"/>
        <select name="sort_by" class="mie-1">
            <option ${sort_by === "popularity.desc" ? "selected" : ""} value="popularity.desc">Popularity</option>
            <option ${sort_by === "vote_average.desc" ? "selected" : ""} value="vote_average.desc">Votes Average</option>
            <option ${sort_by === "original_title.asc" ? "selected" : ""} value="original_title.asc">Original Title</option>
            <option ${sort_by === "primary_release_date.desc" ? "selected" : ""} value="primary_release_date.desc">Release Date</option>
        </select>
        <input type="submit"/>
    </form>
    <script type="module">
      class MovieSortSelect extends HTMLElement {
        constructor() {
          super()
          this.form = this.querySelector('form')
          this.select = this.querySelector('select')
          this.submit = this.querySelector('input[type=submit]')
          this.onChange = this.onChange.bind(this)
        }
        connectedCallback() {
            if (this.select && this.submit) {
                this.submit.classList.add('hidden')
                this.select.addEventListener('change', this.onChange)
            }
        }
        disconnectedCallback() {
          this.select.removeEventListener('change', this.onChange)
        }
        onChange() {
          this.form.submit()
        }
      }

      customElements.define('movie-sort-select', MovieSortSelect)
    </script>
`
}

