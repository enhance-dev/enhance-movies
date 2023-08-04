import getCacheControl from '../lib/cacheControl.mjs'
import { searchMovies } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'

export let get = [fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { q, page = 1 } = req.query
  const shows = await searchMovies(q, page)
  const baseUrl = `search?q=${q}`
  return {
    headers: {
      'cache-control': getCacheControl()
    },
    json: { title: {
      primary: "Results for",
      secondary: `‘${q}’`
    }, shows, genres: req.genres, baseUrl }
  }
}
