import { getMovieWithCast, getPerson, getGenres } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { id, page = 1 } = req.query
  const person = await getPerson(id, page)
  const shows = await getMovieWithCast(id, page)
  const genres = await getGenres()
  return {
    json: { title: {
      primary: "also enters in",
      secondary: "movies"
    }, person, genres, shows }
  }
}
