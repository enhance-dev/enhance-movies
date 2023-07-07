/* globals HTMLElement customElements */
import enhance from '@enhance/element'
import MoviePoster from '../elements/movie-poster.mjs'
import StarRating from '../elements/star-rating.mjs'

enhance('movie-poster', {
  render: MoviePoster,
})

enhance('star-rating', {
  render: StarRating,
})

class MovieSearch extends HTMLElement {
  constructor() {
    super()
    this.query = ''
    this.results = []
    this.timeout = null
    this.serverForm = this.querySelector('form[action="/search"]')
    this.clientSearch = this.querySelector('#client-search')
    this.searchTrigger = this.querySelector('movie-button')
    this.searchDialog = this.querySelector('#client-search-dialog dialog')
    this.searchDialogInput = this.querySelector('#client-search-input')
    this.resultsTitleElement = this.querySelector('#client-search-results-title')
    this.resultsContainer = this.querySelector('#client-search-results')
  }

  // Add event listeners, hide the server rendered UI, show the client UI
  connectedCallback() {
    this.searchTrigger.addEventListener('click', () => this.searchDialog.showModal())
    this.searchDialog.addEventListener('open', () => this.searchDialogInput.focus())
    this.searchDialogInput.addEventListener('input', e => this.onInput(e.target.value))
    this.serverForm.classList.add('hidden')
    this.clientSearch.classList.remove('hidden')
  }

  onInput(value) {
    // Value was cleared, either by ESC, input's builtin clear button, or manually
    if (value === '') {
      return this.resetResults()
    }

    // Set the query as a class property so other methods can have easy access
    this.query = value

    // Handled outside renderResults so as to avoid the preceding debounce
    this.resultsTitleElement.textContent = `Results for ‘${value}’`

    // If a call to our timeout fn is already queued, clear the timeout and start a fresh one
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    // Set a timeout to fire this.search at most once every 200ms;
    // this prevents excessive calls to the the search endpoint if the user is a fast typer
    this.timeout = setTimeout(() => {
      this.search()
    }, 200)

    // Clear the timeout
    return () => {
      clearTimeout(this.timeout)
    }
  }

  async search() {
    const response = await fetch(`/search?q=${this.query}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

    const { shows } = await response.json()

    this.results = shows.results
    this.results.length ? this.renderResults() : this.renderEmptyState()
  }

  renderResults() {
    this.resultsContainer.innerHTML = this.results.map(movie => `
      <movie-poster id='${movie.id}' poster_path='${movie.poster_path}' title='${movie.title}' vote_average='${movie.vote_average}'></movie-poster>
    `).join('')
  }

  renderEmptyState() {
    this.resultsContainer.innerHTML = `<p>We couldn’t find any results for ‘${this.query}’ :(</p>`
  }

  resetResults() {
    this.query = ''
    this.results = []
    this.resultsTitleElement.textContent = ''
    this.resultsContainer.innerHTML = ''
  }
}

customElements.define('movie-search', MovieSearch)
