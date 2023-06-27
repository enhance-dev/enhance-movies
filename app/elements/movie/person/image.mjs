export default function MoviePersonImage ({ html, state }) {
  const { attrs, store } = state
  const { width } = attrs
  const { person } = store
  const { name, profile_path } = person
  return html`
      <movie-image src="${profile_path ? `https://image.tmdb.org/t/p/w${width}${profile_path}` : '/_public/generic-avatar.jpg'}" alt="${name}"></movie-image>
  `
}
