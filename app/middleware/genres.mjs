import { getGenres } from '../tmdbAPI/index.mjs'

export async function fetchGenres (req) {
  const genres = await getGenres()
  req.genres = genres
}
