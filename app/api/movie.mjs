import { getCredits, getMovie, getVideos, getRecommendations } from '../tmdbAPI/index.mjs'

export async function get (req) {
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
      primary: "recommended",
      secondary: "movies"
    }, movie, shows, baseUrl }
  }
}
