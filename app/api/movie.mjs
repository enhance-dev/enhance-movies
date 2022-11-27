import { getMovie } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { id, page } = req.query
  const movie = await getMovie(id, page)
  return {
    json: { title: {
      primary: 'popular',
      secondary: 'movies'
    }, movie }
  }
}
