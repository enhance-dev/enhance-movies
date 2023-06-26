export default function MovieSummaryWrapper ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { backdrop_path = '' } = movie

  const backdropFilter = `${backdrop_path ? 'blur(2px) brightness(80%)' : 'none' }`

  return html`
    <style>
    :host {
      display: block;
      position: relative;
      background-image: url("https://image.tmdb.org/t/p/w1280/${backdrop_path}");
      background-size: cover;
    }

    section {
      margin-top: calc(var(--space-0) * -1);
      display: block;
      max-width: 64rem;
    }

    .fadeout {
      inset: 0;
      background-image: linear-gradient(to bottom, transparent, var(--dark)), linear-gradient(to right, var(--dark), transparent);
      backdrop-filter: ${backdropFilter};
      -webkit-backdrop-filter: ${backdropFilter};
    }

    @media only screen and (min-width: 48em) {
      section {
        display: grid;
        grid-template-columns: 40% 60%;
        margin-bottom: 2.5rem;
      }
    }
    </style>
    <div class="fadeout absolute"></div>
    <section class="pb4 mbe0 relative z1">
      <slot></slot>
    </section>
  `
}
