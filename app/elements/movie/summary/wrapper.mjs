export default function MovieSummaryWrapper ({ html, state }) {
  const { store } = state
  const { movie = {} } = store
  const { backdrop_path = '' } = movie

  return html`
    <style>
      @keyframes filterin {
        from {
          filter: none;
        }
        to {
          filter: var(--movieBackdropFilter);
        }
      }

      :host {
        display: block;
        position: relative;
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

      /* This element contains the movie's poster image as a background image (if one is available).
       * We then compose 2 linear gradients to fade that image from full opacity on the top and right axes
       * to full transparency on the bottom and left axes, in order to fade the background image into the
       * application background.
       * We also apply some filters to soften the background image in order to ensure text will remain
       * legible when set on top of it. */
      .backdrop {
        --mask-image: linear-gradient(to bottom, black, transparent), linear-gradient(to right, transparent, black);
        mask-image: var(--mask-image);
        mask-mode: alpha;
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-mode: alpha;
        -webkit-mask-composite: source-in;
        background-image: url("https://image.tmdb.org/t/p/w1280/${backdrop_path}");
        background-size: cover;
        inset: -2.5%; /* Blur filter can cause background edges to show at top and right; this hides that */
        animation: 1s filterin var(--easeOutQuint);
        animation-delay: 0.5s;
        animation-fill-mode: both;
        transition: filter 0.5s var(--easeOutQuint);
      }

      @media only screen and (min-width: 48em) {
        section {
          display: grid;
          grid-template-columns: 40% 60%;
          margin-block-end: 2.5rem;
        }
      }
    </style>
    <div class="backdrop absolute"></div>
    <section class="pb4 mbe0 relative z1">
      <slot></slot>
    </section>
  `
}
