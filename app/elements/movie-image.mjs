export default function MovieImage ({ html, state }) {
  const { attrs } = state
  const { src, alt } = attrs
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
            src="${src}"
            class="object-cover"
            alt="${alt}"
        />
    </div>`
}
