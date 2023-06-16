import { getGenres } from '../tmdbAPI/index.mjs'
import data from '@begin/data'

export async function fetchGenres (req) {
  console.time('genres')
  let results = await data.get({
    table: 'data',
    key: 'genres',
  })
  let genres = results?.genres
  if (!genres) {
    genres = await getGenres()
    await data.set({
      table: 'data',
      key: 'genres',
      genres
    })
  }
  req.genres = genres
  console.timeEnd('genres')
}
