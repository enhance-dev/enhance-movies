export default function MovieSearch ({ html, state }) {
  const { store } = state
  const { q = '' } = store
  return html`
    <style>
      :host {
        /* Custom properties for movie-dialog */
        --aspect-ratio: none;
        --margin-block: var(--space-2);

        /* Custom property for movie-button */
        --movieButtonOutline: var(--pink-200);
      }

      #server-search-input {
        background: var(--background);
        max-width: 8rem;
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
        background: var(--background);
        color: var(--color);
        padding: var(--space-0);
        max-block-size: inherit; /* Ensure content doesn't grow taller than dialog's max height */
        overflow-y: scroll;
      }

      /* Prevent rendering negative spaces when no search term has been entered */
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
  `
}
