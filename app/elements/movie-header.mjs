export default function MovieHeader ({ html }) {
  return html`
<style>
  :host {
    display: block;
    color: var(--light);
    background-color: var(--pink-700);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    padding-inline: var(--space-0);
    position: sticky;
    inset-block-start: 0;
    z-index: 2;
    --nav-bar-height: 4rem;
  }

  .navBarHeight {
    block-size: var(--nav-bar-height);
  }

  #mobile-nav {
    background-color: var(--pink-700);
    inset-block-start: var(--nav-bar-height);
    inset-block-end: 0;
    inset-inline-start: -100vw;
    overflow-y: scroll;
    inline-size: 100vw;
    transition: inset-inline-start 0.2s ease;
  }

  #burger-control {
    display: block;
    position: absolute;
    opacity: 0;
    block-size: 0.0001px;
    inline-size: 0.0001px;
  }
  #burger-control:checked ~ #mobile-nav {
    display: block;
    inset-inline-start: 0vw;
  }

  @media only screen and (min-width: 48em) {
    #mobile-nav {
      -webkit-transition: initial;
      transition: initial;
    }

    #burger-control:checked ~ #mobile-nav {
      display: none;
    }
  }

  .logo {
    inline-size: 2rem;
    aspect-ratio: 136 / 124;
    inset-block-start: -0.25rem;
  }
</style>
<header>
  <div class="flex align-items-center justify-content-between">
    <nav class="navBarHeight flex align-items-center">
      <input
        id="burger-control"
        class="absolute opacity-0 z-1"
        type="checkbox"
        name="open-burger"
        autocomplete="off"
        aria-label="Open navigation" />
      <label
          class="cursor-pointer relative pie0 hidden-lg"
          for="burger-control"
          title="Open navigation">
          <svg height="24" width="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <use xlink:href="#svg-hamburger">
          </svg>
      </label>
      <a href='/' class='hidden block-lg'>
        <h1 class='font-semibold flex gap-2 align-items-center'>
          <img class='logo hidden inline-block-lg relative' src='/_public/favicon.svg' alt='' />
          Enhance Movies
        </h1>
      </a>
      <movie-sidebar id="mobile-nav" class="fixed z-1 hidden-lg"></movie-sidebar>
    </nav>
    <div class="flex align-items-center">
      <color-scheme></color-scheme>
      <movie-search></movie-search>
    </div>
  </div>
</header>
`
}
