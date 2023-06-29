export default function MovieSearch ({ html, state }) {
  const { store } = state
  const { q = '' } = store
  return html`
    <style>
      input {
        background: var(--dark);
        max-width: 8rem;
      }

      @media (prefers-color-scheme: light) {
        input {
          background: var(--light);
        }
      }

      input:focus {
        outline: 2px solid var(--pink-200);
        outline-offset: 2px;
      }

      @media screen and (min-width: 48em) {
        input {
          max-width: none;
        }
      }
    </style>
    <form action="/search" method="get">
        <input type="search" id="mySearch" name="q" class="p-4 radius1" value="${q}" placeholder="Search" />
    </form>
  `
}
