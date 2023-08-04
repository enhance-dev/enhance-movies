import getCacheControl from '../lib/cacheControl.mjs'
import { getMovieWithCast, getPerson } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'

export let get = [fetchGenres, fetchPerson]

export async function fetchPerson (req) {
  const { id, page = 1 } = req.query
  const person = await getPerson(id, page)
  const shows = await getMovieWithCast(id, page)
  const baseUrl = `/person?id=${id}`
  return {
    headers: {
      'cache-control': getCacheControl()
    },
    json: { title: {
      primary: "Also appears in",
      secondary: ""
    }, person, genres: req.genres, shows, baseUrl }
  }
}
