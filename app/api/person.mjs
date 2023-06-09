import { getMovieWithCast, getPerson } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'

export let get = [fetchGenres, fetchPerson]

export async function fetchPerson (req) {
  const { id, page = 1 } = req.query
  const person = await getPerson(id, page)
  const shows = await getMovieWithCast(id, page)
  return {
    json: { title: {
      primary: "also enters in",
      secondary: "movies"
    }, person, genres: req.genres, shows }
  }
}
