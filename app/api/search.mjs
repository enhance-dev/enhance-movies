import { searchMovies } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'

export let get = [getReferer, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { q, page = 1 } = req.query
  const shows = await searchMovies(q, page)
  const baseUrl = `search?q=${q}`
  return {
    json: { title: {
      primary: "Results for",
      secondary: `‘${q}’`
    }, shows, genres: req.genres, referer: req.referer, baseUrl }
  }
}
