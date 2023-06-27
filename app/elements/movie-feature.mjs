export default function MovieFeature({ html, state }) {
  const { store } = state
  const { featured } = store
  const { backdrop_path, title, overview, id, trailer } = featured
  const trailerUrl = trailer?.key && `https://www.youtube.com/embed/${trailer.key}?rel=0&autoplay=0&showinfo=0`

  return html`
    <style>
      section {
        animation: 1s fadein var(--easing);
      }

      .raise {
        animation: 1s raise var(--easing);
      }

      .backdrop {
        background-image: url("https://image.tmdb.org/t/p/w500${backdrop_path}");
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(2px);
        opacity: 0.333;
      }

      p {
        max-width: 52ch;
      }

      @media screen and (min-width: 48em) {
        .backdrop {
          background-image: url("https://image.tmdb.org/t/p/w1280${backdrop_path}");
          filter: none;
        }
      }
    </style>
    <section class="pi0 pis4-lg pb4 relative">
      <div class='raise'>
        <h1 class="text4 font-light mbe0">${title}</h1>
        <p>${overview}</p>
        <div class="mb4 flex gap0">
          <primary-link-button href="/movie?id=${id}">
            More Info
          </primary-link-button>
          ${trailer ? `
            <movie-trailer-modal href="${trailerUrl}" id="${id}"></movie-trailer-modal>
          ` : ''}
        </div>
      </div>
      <div class="backdrop absolute inset-0 z-1"></div>
    </section>
  `
}
