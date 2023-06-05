export default function Element ({ html, state }) {
  const { attrs, store } = state
  const { height, width } = attrs
  const { movie } = store
  const { poster_path } = movie
  return html`
      <style>
          .aspect-ratio-box {
              padding-top: 150%;
          }
          img {
              filter: grayscale(0%);
          }
      </style>
        <div class="aspect-ratio-box h-0 overflow-hidden relative">
            <div class="absolute inset-bs0 inset-is0 si-100 sb-100">
                <div class="relative">
                    <img
                        width="${width}" height="${height}"
                        src="https://image.tmdb.org/t/p/w${width}${poster_path}"
                        class="object-cover si-100 sb-100"
                    />
                </div>
        </div>
        </div>`
}

