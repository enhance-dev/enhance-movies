import tiny from 'tiny-json-http'

const {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_VERSION
} = process.env

const baseUrl = `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}`

const getMovies = async function(type, page) {
  const movies = await tiny.get({url: `${baseUrl}/movie/${type}?page=${page}&api_key=${TMDB_API_KEY}`})
  return movies.body
}

const getMovie = async function(id) {
  const movie = await tiny.get({url: `${baseUrl}/movie/${id}?api_key=${TMDB_API_KEY}`})
  return movie.body
}

export { getMovie, getMovies }
