import tiny from 'tiny-json-http'

const {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_VERSION
} = process.env

const baseUrl = `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}`

const getMovies = async function(type, page) {
  const response = await tiny.get({url: `${baseUrl}/movie/${type}?page=${page}&api_key=${TMDB_API_KEY}`})
  return response.body
}

const getMovie = async function(id) {
  const response = await tiny.get({url: `${baseUrl}/movie/${id}?api_key=${TMDB_API_KEY}&lang=en`})
  return response.body
}

const getMovieWithCast = async function(id, page = '1', sort_by = 'popularity.desc') {
  const response = await tiny.get({url: `${baseUrl}/discover/movie?with_cast=${id}&page=${page}&sort_by=${sort_by}&api_key=${TMDB_API_KEY}`})
  return response.body
}

const getCredits = async function(id) {
  const response = await tiny.get({url: `${baseUrl}/movie/${id}/credits?api_key=${TMDB_API_KEY}`})
  return response.body
}

const getVideos = async function(id) {
  const response = await tiny.get({url: `${baseUrl}/movie/${id}/videos?api_key=${TMDB_API_KEY}`})
  return response.body
}

const getRecommendations = async function(id, page) {
  const response = await tiny.get({url: `${baseUrl}/movie/${id}/recommendations?page=${page}&api_key=${TMDB_API_KEY}`})
  return response.body
}

const getPerson = async function(id) {
  const response = await tiny.get({url: `${baseUrl}/person/${id}?api_key=${TMDB_API_KEY}`})
  return response.body
}

export { getCredits, getMovie, getMovies, getVideos, getRecommendations, getPerson, getMovieWithCast }
