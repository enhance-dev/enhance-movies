export default function MoviePagination ({ html, state }) {
  const { store } = state
  const { baseUrl, shows } = store
  const { page, total_pages } = shows
  const pageInt = parseInt(page, 10)
  const prevUrl = `${baseUrl}&page=${pageInt - 1}`
  const nextUrl = `${baseUrl}&page=${pageInt + 1}`
  return html`
    <div class="flex align-items-center justify-content-between">
        <secondary-link-button class="${pageInt === 1 ? 'invisible' : ''}" href="${prevUrl}">Prev</secondary-link-button>
        <secondary-link-button class="${pageInt === total_pages ? 'invisible' : ''}" href="${nextUrl}">Next</secondary-link-button>
    </div>`
}
