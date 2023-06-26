export default function MovieHeader ({ html }) {
  return html`
<style>
  :host {
    display: block;
    background-color: var(--pink-700);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    padding-inline: var(--space-0);
    height: var(--nav-bar-height);
    position: sticky;
    inset-block-start: 0;
    z-index: 2;
    --nav-bar-height: 4rem;
  }

  nav {
    height: var(--nav-bar-height);
  }

  #docs-nav {
    background-color: var(--pink-700);
    inset-block-start: var(--nav-bar-height);
    inset-block-end: 0;
    inset-inline-start: -100vw;
    overflow-y: scroll;
    width: 100vw;
    -webkit-transition: left 0.2s ease;
    transition: left 0.2s ease;
  }

  #burger-control {
    display: block;
    position: absolute;
    opacity: 0;
    block-size: 0.0001px;
    inline-size: 0.0001px;
  }
  #burger-control:checked ~ #docs-nav {
    display: block;
    inset-inline-start: 0vw;
  }

  @media only screen and (min-width: 48em) {
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
<header>
  <div class="flex align-items-center justify-content-between">
    <nav class="flex align-items-center">
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
            <use xlink:href="#svg-hamburger">
          </svg>
      </label>
      <movie-sidebar id="docs-nav" class="fixed z-1"></movie-sidebar>
    </nav>
    <div class="flex align-items-center">
      <movie-search></movie-search>
    </div>
  </div>
</header>
`
}
