import { getMovieWithCast, getPerson } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { id, page = 1 } = req.query
  const person = await getPerson(id, page)
  const shows = await getMovieWithCast(id, page)
  return {
    json: { title: {
      primary: "also enters in",
      secondary: "movies"
    }, person, shows }
  }
}
