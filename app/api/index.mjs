import { getMovies } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const page = req.query.page || 1
  const shows = await getMovies('popular', page)
  return {
    json: { title: {
      primary: 'popular',
      secondary: 'movies'
    }, shows }
  }
}
