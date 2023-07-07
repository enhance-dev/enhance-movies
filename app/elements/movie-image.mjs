export default function MovieImage ({ html, state }) {
  const { attrs } = state
  const { src, alt } = attrs
  return html`
    <style>
      img {
          aspect-ratio: 2 / 3;
      }
    </style>
    <img
      src="${src}"
      class="object-cover"
      alt="${alt}"
    />
  `
}
