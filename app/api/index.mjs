import tiny from 'tiny-json-http'

const {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_VERSION
} = process.env

export async function get (req) {
  const page = req.query.page || 1
  const url = `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`
  const shows = (await tiny.get({url})).body
  return {
    json: { title: {
      primary: 'popular',
      secondary: 'movies'
    }, shows }
  }
}
