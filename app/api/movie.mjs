import { getCredits, getMovie, getVideos } from '../tmdbAPI/index.mjs'

export async function get (req) {
  const { id, page } = req.query
  const movie = await getMovie(id, page)
  const credits = await getCredits(id)
  const videos = (await getVideos(id)).results
  const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  movie.cast = credits.cast
  movie.trailer = trailer
  return {
    json: { title: {
      primary: movie.title,
      secondary: movie.tagline
    }, movie }
  }
}
