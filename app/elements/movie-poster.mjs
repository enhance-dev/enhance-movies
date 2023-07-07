export function MoviePosterStyles() {
  return `<style>
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

  img {
    aspect-ratio: 2 / 3;
  }
</style>
`
}

export function MoviePosterHTML({ html, state }) {
  const { attrs } = state
  let { id, poster_path, title, vote_average } = attrs
  let percentRemainder

  if (vote_average === '0') {
    vote_average = 'Not yet rated'
  } else {
    vote_average = Number(vote_average).toFixed(1)
    percentRemainder = 100 - ((Number(vote_average) / 10) * 100) // Calculate remaining % out of 100 for star rating inset
  }

  return html`
    <a href="/movie?id=${id}&page=1" class="relative flex flex-col">
      <div class="relative image-wrapper">
        <img
          src="${poster_path === 'null' ? '/_public/generic-movie.jpg' : `https://image.tmdb.org/t/p/w342${poster_path}`}"
          alt="${title}"
          class="si-100 object-cover"
        />
      </div>
      <h2 class="mbs0 mbe-6">${title}</h2>
      <p class="flex gap-4 align-items-center text-1">
        ${percentRemainder ? `<star-rating inset="${percentRemainder}"></star-rating>` : ''}
        ${vote_average}
      </p>
    </a>`
}

export default function MoviePoster ({ html, state }) {
  return html`
    ${MoviePosterStyles()}
    ${MoviePosterHTML({ html, state })}
`
}
