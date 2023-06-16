import { getMovies } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'

export let get = [getReferer, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const baseUrl = `/?category=${category}`
  return {
    json: { title: {
      primary: category,
      secondary: 'movies'
    }, shows, genres: req.genres, referer: req.referer, baseUrl }
  }
}
