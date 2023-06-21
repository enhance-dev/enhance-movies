import { getMovieWithCast, getPerson } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'

export let get = [getReferer, fetchGenres, fetchPerson]

export async function fetchPerson (req) {
  const { id, page = 1 } = req.query
  const person = await getPerson(id, page)
  const shows = await getMovieWithCast(id, page)
  return {
    json: { title: {
      primary: "Also appears in",
      secondary: ""
    }, person, genres: req.genres, referer: req.referer, shows }
  }
}
