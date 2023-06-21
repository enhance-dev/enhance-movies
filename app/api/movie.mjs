import { getCredits, getMovie, getVideos, getRecommendations } from '../tmdbAPI/index.mjs'
import { fetchGenres } from '../middleware/genres.mjs'
import { getReferer } from '../middleware/referer.mjs'

export let get = [getReferer, fetchGenres, fetchMovie]

export async function fetchMovie (req) {
  const { id, page = 1 } = req.query
  const movie = await getMovie(id, page)
  const credits = await getCredits(id)
  const videos = (await getVideos(id)).results
  const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  const shows = await getRecommendations(id, page)
  movie.cast = credits.cast
  movie.trailer = trailer
  const baseUrl = `/movie?id=${id}`
  return {
    json: { title: {
      primary: "Recommended",
      secondary: "movies"
    }, movie, shows, genres: req.genres, referer: req.referer, baseUrl }
  }
}
