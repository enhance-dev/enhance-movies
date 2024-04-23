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
        color: var(--color);
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
      [slot='content'] :is(h2, #client-search-results, #no-search-results):empty {
        display: none;
      }

      #client-search-results {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: var(--space-2) var(--space-0);
        margin-block: var(--space-2);
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
          <section id='no-search-results'></section>
          <section id='client-search-results'></section>
        </div>
      </movie-dialog>
    </section>
    <js-naked-day>
      <script type='module' src='/_public/browser/movie-search.mjs'></script>
    </js-naked-day>
  `
}
