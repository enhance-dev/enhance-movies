import { searchMovies } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { q, page = 1 } = req.query
  const shows = await searchMovies(q, page)
  const baseUrl = `search?q=${q}`
  return {
    json: { title: {
      primary: q,
      secondary: "search results"
    }, shows, baseUrl }
  }
}
