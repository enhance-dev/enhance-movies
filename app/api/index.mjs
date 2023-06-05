import { getMovies } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  return {
    json: { title: {
      primary: category,
      secondary: 'movies'
    }, shows, category, page }
  }
}
