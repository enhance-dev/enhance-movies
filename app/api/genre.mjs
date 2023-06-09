import { getGenreMovies } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'

export let get = [fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { name, id, page = 1, sort_by = 'popularity.desc' } = req.query
  const shows = await getGenreMovies(id, page, sort_by)
  const baseUrl = `/genre?id=${id}&name=${name}&sort_by=${sort_by}`
  return {
    json: { title: {
      primary: name,
      secondary: 'movies'
    }, shows, genres: req.genres, baseUrl }
  }
}
