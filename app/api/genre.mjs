import { getGenreMovies, getGenres } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { name, id, page = 1 } = req.query
  const shows = await getGenreMovies(id, page)
  const genres = await getGenres()
  const baseUrl = `/genre?id=${id}&name=${name}`
  return {
    json: { title: {
      primary: name,
      secondary: 'movies'
    }, shows, genres, baseUrl }
  }
}
