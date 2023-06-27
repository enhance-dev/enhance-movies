export default function MoviePoster ({ html, state }) {
  const { attrs } = state
  let { id, poster_path, title, vote_average } = attrs

  if (vote_average === '0') {
    vote_average = 'Not yet rated'
  } else {
    vote_average = Number(vote_average).toFixed(1)
  }

  return html`
    <style>
      a:focus {
        outline: none;
      }

      .image-wrapper {
        transition: scale 0.25s ease-in-out;
      }

      .image-wrapper:after {
        content: '';
        position: absolute;
        inset: 0;
        outline: 2px solid var(--pink-500);
        outline-offset: -2px;
        box-shadow: 0 0 4px 2px var(--pink-500);
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
      }

      a:hover .image-wrapper,
      a:focus .image-wrapper {
        scale: 1.0333;
      }

      a:hover .image-wrapper:after,
      a:focus .image-wrapper:after {
        opacity: 1;
      }
    </style>
    <a href="/movie?id=${id}&page=1" class="relative flex flex-col">
      <div class="relative image-wrapper">
        <img
          src="${poster_path === 'null' ? '/_public/generic-movie.jpg' : `https://image.tmdb.org/t/p/w342${poster_path}`}"
          alt="${title}"
        />
      </div>
      <h2 class="mbs0 mbe-6">${title}</h2>
      <span class="text-1">☆ ${vote_average}</span>
    </a>`
}
