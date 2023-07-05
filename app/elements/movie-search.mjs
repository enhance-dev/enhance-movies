export default function MovieSearch ({ html, state }) {
  const { store } = state
  const { q = '' } = store
  return html`
    <style>
      :host {
        /* Custom properties for movie-dialog */
        --aspect-ratio: none;
        --margin-block: var(--space-2);
      }

      #server-search-input {
        background: var(--dark);
        max-width: 6rem;
      }

      @media screen and (min-width: 48em) {
        #server-search-input {
          max-width: none;
        }
      }

      #server-search-input:focus {
        outline: 2px solid var(--pink-200);
        outline-offset: 2px;
      }

      [slot='content'] {
        background: var(--dark);
        color: var(--light);
        padding: var(--space-0);
        max-block-size: inherit;
        overflow-y: scroll;
      }

      [slot='content'] :is(h2, movie-grid-client):empty {
        display: none;
      }

      #client-search-input {
        background: transparent;
        inline-size: 100%;
        border-color: var(--grey-200);
      }

      #client-search-input:focus {
        outline: none;
        border-color: var(--pink-500);
      }

      @media (prefers-color-scheme: light) {
        #server-search-input {
          background: var(--light);
        }

        [slot='content'] {
          background: var(--light);
          color: var(--dark);
        }

      }
    </style>

    <form action='/search' method='get'>
      <input type='search' id='server-search-input' name='q' class='p-4 radius1' value='${q}' placeholder='Search' />
    </form>

    <section id='client-search' class='hidden'>
      <movie-button>
        Search
      </movie-button>

      <movie-dialog id='client-search-dialog'>
        <div slot='content'>
          <input id='client-search-input' name='title' type='search' class='text1 border-be2' placeholder='Enter a title to search for' />

          <h2 id='client-search-results-title' class='mb0 text2 font-medium'></h2>
          <movie-grid-client id='client-search-results'></movie-grid-client>
        </div>
      </movie-dialog>
    </section>

    <script type='module' src='/_public/browser/movie-search.mjs'></script>
    <script type='module' src='/_public/browser/movie-poster.mjs'></script>
  `
}
