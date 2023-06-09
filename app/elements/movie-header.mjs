export default function Element ({ html }) {
  return html`
<style>
  :host header {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    background-color: var(--secondary-100);
  }
  :host div {
    min-height: 64px;
    padding: 0 24px;
  }

  #docs-nav {
    display: block;
    position: fixed;
    background: white;
    left: -100vw;
    bottom: 0;
    overflow-y: auto;
    width: 100vw;
    -webkit-transition: left 0.2s ease;
    transition: left 0.2s ease;
  }

  #burger-control {
    display: block;
    position: absolute;
    opacity: 0;
    height: 0.0001px;
    width: 0.0001px;
  }
  #burger-control:checked ~ #docs-nav {
    display: block;
    left: 0vw;
  }

  @media only screen and (min-width: 26em) {
    #hamburger,
    #docs-nav {
      display: none !important; /* even when :checked */
    }

    #docs-nav {
      -webkit-transition: initial;
      transition: initial;
    }
  }
</style>
<header class="fixed inset-bs-0 si-100 z1">
  <div class="flex align-items-center justify-content-between">
    <div class="flex align-items-center">
      <input
        id="burger-control"
        class="absolute opacity-0 z-1"
        type="checkbox"
        name="open-burger"
        autocomplete="off"
        aria-label="Open navigation" />
      <label
          id="hamburger"
          class="cursor-pointer relative"
          for="burger-control"
          title="Open navigation">
          <svg height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
      </label>
      <movie-sidebar id="docs-nav" class="absolute z-1"></movie-sidebar>
    </div>
    <div class="flex align-items-center">
      <movie-search></movie-search>
    </div>
  </div>
</header>
`
}

