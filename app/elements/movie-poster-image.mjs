export default function Element ({ html, state }) {
  const { attrs, store } = state
  const { width } = attrs
  const { movie } = store
  const { poster_path, title } = movie
  return html`
      <style>
          .aspect-ratio-box {
              aspect-ratio: 2 / 3;
          }
          img {
              filter: grayscale(0%);
          }
      </style>
        <div class="aspect-ratio-box overflow-hidden">
            <img
                src="https://image.tmdb.org/t/p/w${width}${poster_path}"
                class="object-cover"
                alt="${title}"
            />
        </div>`
}
