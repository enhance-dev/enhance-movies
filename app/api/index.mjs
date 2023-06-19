import { getMovies, getVideos } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'

export const get = [getReferer, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const [featured] = shows.results
  const featuredVideos = (await getVideos(featured.id)).results
  const trailer = featuredVideos.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  const baseUrl = `/?category=${category}`
  return {
    json: {
      title: {
        primary: category,
        secondary: 'movies'
      },
      shows,
      featured: {
        ...featured,
        trailer,
      },
      genres: req.genres,
      baseUrl,
      referer: req.referer
    }
  }
}
