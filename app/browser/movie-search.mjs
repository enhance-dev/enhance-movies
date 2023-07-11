/* globals HTMLElement customElements */
import formatTitle from '../lib/formatTitle.mjs'
import { MoviePosterHTML } from '../elements/movie-poster.mjs'
import { StarRatingHTML } from '../elements/star-rating.mjs'

function attributesToObject(node) {
  let attrs = {}
  let args = [...node.arguments]
  args.forEach((attribute) => {
    attrs[attribute] = node.arguments[attribute]
  })
  return attrs
}

class MoviePoster extends HTMLElement {
  constructor() {
    super()
    this.render = MoviePosterHTML
  }
  connectedCallback() {
    this.innerHTML = this.render(attributesToObject(this))
  }
}

customElements.define('movie-poster', MoviePoster)

class StarRating extends HTMLElement {
  constructor() {
    super()
    this.render = StarRatingHTML
  }
  connectedCallback() {
    this.innerHTML = this.render(attributesToObject(this))
  }
}

customElements.define('star-rating', StarRating)

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

  // When the custom element connects, add event listeners, hide the server rendered UI, and show the client UI
  connectedCallback() {
    this.searchTrigger.addEventListener('click', () => this.searchDialog.showModal())
    this.searchDialog.addEventListener('open', () => this.searchDialogInput.focus())
    this.searchDialogInput.addEventListener('input', e => this.onInput(e.target.value))
    this.serverForm.classList.add('hidden')
    this.clientSearch.classList.remove('hidden')
  }

  // Fires every time a user modifies or clears the search input
  onInput(value) {
    // Value was cleared, either by ESC, input's builtin clear button, or manually
    if (value === '') {
      return this.resetResults()
    }

    // Set the query as a class property so other methods can have easy access to it
    this.query = value

    // Update the results title separately from updating renderResults so as to avoid the latter’s debounce
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
      <movie-poster id='${movie.id}' poster_path='${movie.poster_path}' title='${formatTitle(movie.title)}' vote_average='${movie.vote_average}'></movie-poster>
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
