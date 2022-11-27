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
            <div class="absolute top0 left0 w-full h-full">
                <div class="relative">
                    <img
                        width="${width}" height="${height}"
                        src="https://image.tmdb.org/t/p/w${width}${poster_path}"
                        class="object-cover w-full h-full"
                    />
                </div>
        </div>
        </div>`
}

