export default function MovieSummaryWrapper ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { backdrop_path = '' } = movie

  const backdropFilter = `${backdrop_path ? 'blur(2px) brightness(80%)' : 'none' }`
  const backdropFilterLight = `${backdrop_path ? 'blur(6px) brightness(120%) contrast(66%)' : 'none' }`

  return html`
    <style>
      :host {
        display: block;
        position: relative;
        background-image: url("https://image.tmdb.org/t/p/w1280/${backdrop_path}");
        background-size: cover;
        animation: 0.5s fadein var(--easeOutQuint);
      }

      section {
        margin-block-start: calc(var(--space-0) * -1);
        display: block;
        max-width: 64rem;
        animation: 1s fadein var(--easeOutQuint), 1s raise var(--easeOutQuint);
        animation-delay: 0.333s;
        animation-fill-mode: backwards;
      }

      .fadeout {
        inset: 0;
        background-image: linear-gradient(to bottom, transparent, var(--dark)), linear-gradient(to right, var(--dark), transparent);
        backdrop-filter: ${backdropFilter};
        -webkit-backdrop-filter: ${backdropFilter};
        animation: 1s fadein var(--easeOutQuint);
        animation-delay: 0.5s;
        animation-fill-mode: backwards;
      }

      @media (prefers-color-scheme: light) {
        .fadeout {
          background-image: linear-gradient(to bottom, transparent, var(--light)), linear-gradient(to right, var(--light), transparent);
          backdrop-filter: ${backdropFilterLight};
          -webkit-backdrop-filter: ${backdropFilterLight};
        }
      }

      @media only screen and (min-width: 48em) {
        section {
          display: grid;
          grid-template-columns: 40% 60%;
          margin-block-end: 2.5rem;
        }
      }
    </style>
    <div class="fadeout absolute"></div>
    <section class="pb4 mbe0 relative z1">
      <slot></slot>
    </section>
  `
}
