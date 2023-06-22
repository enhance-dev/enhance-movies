export default function MovieSummaryWrapper ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { backdrop_path = '' } = movie

  return html`
    <style>
    :host {
      display: block;
      background-image: url("https://image.tmdb.org/t/p/w1280/${backdrop_path}");
      background-size: cover;
    }

    section {
      backdrop-filter: ${backdrop_path ? 'blur(2px) brightness(30%)' : 'none' };
      -webkit-backdrop-filter: ${backdrop_path ? 'blur(2px) brightness(30%)' : 'none' };
    }

    section > div {
        display: block;
        max-width: 60rem;
    }

    @media only screen and (min-width: 48em) {
      section > div {
        display: grid;
        grid-template-columns: 40% 60%;
        margin-bottom: 2.5rem;
      }
    }
    </style>
    <section class="pb4 mbe0">
      <div class="mi-auto">
        <slot></slot>
      </div>
    </section>
  `
}
