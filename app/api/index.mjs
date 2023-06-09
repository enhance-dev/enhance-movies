import { getMovies } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'

export let get = [fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const baseUrl = `/?category=${category}`
  return {
    json: { title: {
      primary: category,
      secondary: 'movies'
    }, shows, genres: req.genres, baseUrl }
  }
}
