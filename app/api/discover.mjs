import { getMovies, getVideos } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'
import { getActiveRoute } from '../middleware/activeRoute.mjs'

export const get = [getReferer, getActiveRoute, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { category = 'popular', page = 1 } = req.query
  const shows = await getMovies(category, page)
  const [featured] = shows.results
  const featuredVideos = (await getVideos(featured.id)).results
  const trailer = featuredVideos.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  const baseUrl = `/discover?category=${category}`

  const primary = `${category.charAt(0).toUpperCase()}${category.substring(1).replace('_', ' ')}`

  return {
    json: {
      title: {
        primary,
        secondary: 'movies'
      },
      shows,
      featured: {
        ...featured,
        trailer,
      },
      genres: req.genres,
      baseUrl,
      referer: req.referer,
      activeRoute: req.activeRoute,
    }
  }
}
