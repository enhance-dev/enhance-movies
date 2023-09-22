import getCacheControl from '../lib/cacheControl.mjs'
import { getGenreMovies, getVideos } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getActiveRoute } from '../middleware/activeRoute.mjs'

export let get = [getActiveRoute, fetchGenres, fetchMovies]

export async function fetchMovies (req) {
  const { name, id, page = 1, sort_by = 'popularity.desc' } = req.query
  const shows = await getGenreMovies(id, page, sort_by)
  const [featured] = shows.results
  const featuredVideos = (await getVideos(featured.id)).results
  const trailer = featuredVideos.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  const baseUrl = `/genre?id=${id}&name=${name}&sort_by=${sort_by}`

  return {
    headers: {
      'cache-control': getCacheControl(),
    },
    json: {
      title: {
        primary: `${name.charAt(0).toUpperCase()}${name.substring(1)}`,
        secondary: 'movies'
      },
      shows,
      featured: {
        ...featured,
        trailer
      },
      genres: req.genres,
      activeRoute: req.activeRoute,
      id,
      sort_by,
      baseUrl
    }
  }
}
