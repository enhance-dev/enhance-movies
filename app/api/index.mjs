import { getMovies } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const baseUrl = `/?category=${category}`
  const total_pages = shows.total_pages
  return {
    json: { title: {
      primary: category,
      secondary: 'movies'
    }, shows, baseUrl, page, total_pages }
  }
}
