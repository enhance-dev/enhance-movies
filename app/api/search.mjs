import { searchMovies } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { q, page = 1 } = req.query
  const shows = await searchMovies(q, page)
  const baseUrl = `search?q=${q}`
  const total_pages = shows.total_pages
  return {
    json: { title: {
      primary: q,
      secondary: "search results"
    }, shows, baseUrl, page, total_pages }
  }
}
