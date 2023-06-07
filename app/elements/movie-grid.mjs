export default function Element ({ html, state }) {
  const { attrs, store } = state
  const { type = 'shows' } = attrs
  const shows = store[type].results.map((show, i) => `<movie-poster type="${type}" key="${i}"></movie-poster>`).join('')
  return html`
<style>
    :host {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(5rem,12.5rem));
        grid-gap: 2rem 1rem;
        justify-content: space-evenly;
        align-content: space-between;
        align-items: start;
        margin: 2rem 0;
    }
</style>
${shows}
<slot></slot>
`
}

