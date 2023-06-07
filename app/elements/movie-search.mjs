export default function Element ({ html, state }) {
  const { store } = state
  const { q = '' } = store
  return html`
    <form action="/search" method="get">
        <input type="search" id="mySearch" name="q" value="${q}" placeholder="Search for a movie..." />
    </form>
  `
}

