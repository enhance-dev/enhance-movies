import { getMovies, getGenres } from '../tmdbAPI/index.mjs'

export async function get (req) {
  console.log('do I get called?')
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const genres = await getGenres()
  const baseUrl = `/?category=${category}`
  return {
    json: { title: {
      primary: category,
      secondary: 'movies'
    }, shows, genres, baseUrl }
  }
}
