/* globals HTMLElement customElements */
import formatTitle from '../lib/formatTitle.mjs'

const TemplateMixin = (superclass) => class extends superclass {
  constructor() {
    super()
    const templateName = `${this.tagName.toLowerCase()}-template`
    const template = document.getElementById(templateName)
    if (template) {
      this.template = template
    }
    else {
      this.template = document.createElement('template')
      this.template.innerHTML = this.render()
      this.template.setAttribute('id', templateName)
      document.body.appendChild(this.template)
    }

    if (!this.children.length) {
      this.replaceChildren(this.template.content.cloneNode(true))
    }
  }
}

class StarRating extends TemplateMixin(HTMLElement) {
  constructor() {
    super()
    this.fill = this.querySelectorAll('svg')[1]
  }

  render() {
    return `
      <svg
        width="84"
        height="17"
        viewBox="0 0 84 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlink:href="#svg-stars">
      </svg>

      <svg
        width="84"
        height="17"
        viewBox="0 0 84 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0"
        clip-path="inset(0 0% 0 0)"
      >
       <use xlink:href="#svg-filled-stars">
      </svg>
    `
  }

  static get observedAttributes() {
    return [ 'inset' ]
  }

  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      if (name === 'inset') {
        const clipPath = `inset(0 ${name}% 0 0)`
        this.fill.setAttribute('clip-path', clipPath)
      }
    }
  }
}

customElements.define('star-rating', StarRating)

class MovieSearchPoster extends TemplateMixin(HTMLElement) {
  constructor() {
    super()
    this.link = this.querySelector('a')
    this.img = this.querySelector('img')
    this.movieTitle = this.querySelector('h2')
    this.rating = this.querySelector('star-rating')
    this.average = this.querySelector('p > span')
  }

  render() {
    return `
      <a class="relative flex flex-col">
        <div class="relative image-wrapper">
          <img
            src="/_public/generic-movie.jpg"
            class="si-100 object-cover"
          />
        </div>
        <h2 class="mbs0 mbe-6"></h2>
        <p class="flex gap-4 align-items-center text-1">
          <star-rating></star-rating>
          <span></span>
        </p>
      </a>
    `
  }

  static get observedAttributes() {
    return [
      'id',
      'poster_path',
      'title',
      'vote_average'
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (old !== value) {

      if (name === 'id') {
        this.link.setAttribute('href', `/movie?id=${value}&page=1`)
      }

      if (name === 'poster_path' && value !== 'null') {
        this.img.setAttribute('src', `https://image.tmdb.org/t/p/w342${value}`)
      }

      if (name === 'title') {
        this.img.setAttribute('alt', value)
        this.movieTitle.innerText = value
      }

      if (name === 'vote_average') {
        const average = Number(value).toFixed(1)
        const rating = value
          ? (100 - ((Number(value) / 10) * 100))
          : 'Not yet rated'
        if(this.rating) this.rating.setAttribute('inset', rating)
        this.average.innerHTML = average
      }
    }
  }
}

customElements.define('movie-search-poster', MovieSearchPoster)



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
    this.emptyStateContainer = this.querySelector('#no-search-results')
  }

  // When the custom element connects, add event listeners, hide the server rendered UI, and show the client UI
  connectedCallback() {
    this.searchTrigger.addEventListener('click', () => this.searchDialog.showModal())
    this.searchDialog.addEventListener('open', () => this.searchDialogInput.focus())
    this.searchDialogInput.addEventListener('input', e => this.onInput(e.target.value))
    this.serverForm.classList.add('hidden')
    this.clientSearch.classList.remove('hidden')
  }

  disconnectedCallback() {
    this.searchTrigger.removeEventListener('click', () => this.searchDialog.showModal())
    this.searchDialog.removeEventListener('open', () => this.searchDialogInput.focus())
    this.searchDialogInput.removeEventListener('input', e => this.onInput(e.target.value))
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
    this.emptyStateContainer.innerHTML = ''
    this.resultsContainer.innerHTML = this.results.map(movie => `
      <movie-search-poster id='${movie.id}' poster_path='${movie.poster_path}' title='${formatTitle(movie.title)}' vote_average='${movie.vote_average}'></movie-search-poster>
    `).join('')
  }

  renderEmptyState() {
    this.resultsContainer.innerHTML = ''
    this.emptyStateContainer.innerHTML = `<p>We couldn’t find any results for ‘${this.query}’ :(</p>`
  }

  resetResults() {
    this.query = ''
    this.results = []
    this.resultsTitleElement.textContent = ''
    this.emptyStateContainer.innerHTML = ''
    this.resultsContainer.innerHTML = ''
  }
}

customElements.define('movie-search', MovieSearch)
