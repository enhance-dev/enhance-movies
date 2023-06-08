import { getGenreMovies, getGenres } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { name, id, page = 1, sort_by = 'popularity.desc' } = req.query
  const shows = await getGenreMovies(id, page, sort_by)
  const genres = await getGenres()
  const baseUrl = `/genre?id=${id}&name=${name}&sort_by=${sort_by}`
  return {
    json: { title: {
      primary: name,
      secondary: 'movies'
    }, shows, genres, baseUrl }
  }
}
