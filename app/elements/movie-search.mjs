export default function MovieSearch ({ html, state }) {
  const { store } = state
  const { q = '' } = store
  return html`
    <style>
      input {
        background: var(--dark);
      }

      input:focus {
        outline: 2px solid var(--pink-200);
        outline-offset: 2px;
      }
    </style>
    <form action="/search" method="get">
        <input type="search" id="mySearch" name="q" class="p-4 radius1" value="${q}" placeholder="Search for a movie..." />
    </form>
  `
}
