export default function Element ({ html, state }) {
  const { store } = state
  const { baseUrl, page, total_pages } = store
  const pageInt = parseInt(page, 10)
  const prevUrl = `${baseUrl}&page=${pageInt - 1}`
  const nextUrl = `${baseUrl}&page=${pageInt + 1}`
  return html`
    <div class="flex align-items-center justify-content-between">
        <movie-button class="${pageInt === 1 ? 'invisible' : ''}" href="${prevUrl}" label="Prev"></movie-button>
        <movie-button class="${pageInt === total_pages ? 'invisible' : ''}" href="${nextUrl}" label="Next"></movie-button>
    </div>`
}
