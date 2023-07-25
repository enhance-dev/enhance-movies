/* globals document HTMLElement customElements */
import formatTitle from '../lib/formatTitle.mjs'
import MoviePosterHTML from '../elements/movie-poster.mjs'
import StarRatingHTML from '../elements/star-rating.mjs'
// This stubs out the store. It is used when rendering the template to match the function signature of SSR
const api = {
  store: {}
}

// Instance of the Mixer mixin factory
const mix = (superclass) => new Mixer(superclass)

// Mixin factory for adding a list of mixins to a class
/*
 * mix(Class).with(OtherClass, AnotherClass, YetAnotherClass)
*/
class Mixer {
  constructor(superclass) {
    this.superclass = superclass
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass)
  }
}

// Enhance Base Element to match the SSR function signature
export default class EnhanceBase extends HTMLElement {
  constructor() {
    super()
    this.api = api || {}
    this.store = this.api?.store || {}
    this.context = {}
  }

  get state() {
    const attrs = this.attributes.length
      ? this.attrsToObject(this.attributes)
      : {}

    return {
      attrs,
      context: this.context,
      store: this.store
    }
  }

  attrsToObject(attrs = []) {
    const attrsObj = {}
    for (let d = attrs.length - 1; d >= 0; d--) {
      let attr = attrs[d]
      attrsObj[attr.nodeName] = attr.nodeValue
    }
    return attrsObj
  }

  html(strings, ...values) {
    const collect = []
    for (let i = 0; i < strings.length - 1; i++) {
      collect.push(strings[i], values[i])
    }
    collect.push(strings[strings.length - 1])
    return collect.join('')
  }
}
// Mixin specifically for reusing SFCs as Custom Elements in the browser
const CustomElementMixin = (superclass) => class extends superclass {
  constructor() {
    super()
    // Removes style tags as they are already inserted into the head by SSR
    // TODO: If only added dynamically in the browser we need to insert the style tag after running the style transform on it. As well as handle deduplication.
    this.template.content.querySelectorAll('style')
      .forEach((tag) => { this.template.content.removeChild(tag) })
    // Removes script tags as they are already appended to the body by SSR
    // TODO: If only added dynamically in the browser we need to insert the script tag after running the script transform on it. As well as handle deduplication.
    this.template.content.querySelectorAll('script')
      .forEach((tag) => { this.template.content.removeChild(tag) })

    // If the Custom Element was already expanded by SSR it will have children so do not replaceChildren
    if (!this.children.length) {
      // If this Custom Element was added dynamically with JavaScript then use the template contents to expand the element
      this.replaceChildren(this.template.content.cloneNode(true))
    }
  }
}

// Mixin to create add a reusable template into the document
const TemplateMixin = (superclass) => class extends superclass {
  constructor() {
    super()
    // Make a unique name for the template based on the elements tagName
    const templateName = `${this.tagName.toLowerCase()}-template`
    // See if the template is already added to the document
    const template = document.getElementById(templateName)
    if (template) {
      // Reuse the template in the document if it exists
      this.template = template
    }
    else {
      // Create a template reusable template element
      this.template = document.createElement('template')
      // Render the SSR function into the template contents
      this.template.innerHTML = this.render({ html: this.html, state: this.state })
      // Add the template name
      this.template.setAttribute('id', templateName)
      // Append the template to the body for subsequent elements to reuse
      document.body.appendChild(this.template)
    }
  }
}

class StarRating extends mix(EnhanceBase).with(TemplateMixin, CustomElementMixin) {
  constructor() {
    super()
    this.fill = this.querySelectorAll('svg')[1]
    this.render = this.render.bind(this)
  }

  render(args) {
    return StarRatingHTML(args)
  }

  static get observedAttributes() {
    return [ 'inset' ]
  }

  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      if (name === 'inset') {
        const clipPath = `inset(0 ${value}% 0 0)`
        this.fill.setAttribute('clip-path', clipPath)
      }
    }
  }
}

customElements.define('star-rating', StarRating)

class MovieSearchPoster extends mix(EnhanceBase).with(TemplateMixin, CustomElementMixin) {
  constructor() {
    super()
    this.link = this.querySelector('a')
    this.img = this.querySelector('img')
    this.movieTitle = this.querySelector('h2')
    this.rating = this.querySelector('star-rating')
    this.average = this.querySelector('p > span')
    this.render = this.render.bind(this)
  }

  render(args) {
    return MoviePosterHTML(args)
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
