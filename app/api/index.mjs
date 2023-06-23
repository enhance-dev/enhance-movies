import { getMovies, getVideos } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'
import { getActiveRoute } from '../middleware/activeRoute.mjs'

export const get = [getReferer, getActiveRoute, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const popular = await getMovies('popular', 1)
  const topRated = await getMovies('top_rated', 1)
  const upcoming = await getMovies('upcoming', 1)
  const [featured] = popular.results
  const featuredVideos = (await getVideos(featured.id)).results
  const trailer = featuredVideos.find(video => video.type === 'Trailer' && video.site === 'YouTube')

  return {
    json: {
      popular,
      topRated,
      upcoming,
      featured: {
        ...featured,
        trailer,
      },
      genres: req.genres,
      referer: req.referer,
      activeRoute: req.activeRoute,
    }
  }
}
