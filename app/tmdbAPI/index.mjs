import tiny from 'tiny-json-http'

const {
  TMDB_API_KEY,
  TMDB_API_BASE_URL,
  TMDB_API_VERSION,
  TMDB_API_TOKEN
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

const searchMovies = async function(q, page) {
  const response = await tiny.get({url: `${baseUrl}/search/movie?query=${q}&page=${page}&api_key=${TMDB_API_KEY}`})
  return response.body
}

const getGenres = async function() {
  const response = await tiny.get({url: `${baseUrl}/genre/movie/list?api_key=${TMDB_API_KEY}`})
  return response.body.genres
}

const getGenreMovies = async function(id, page, sort_by) {
  const response = await tiny.get(
    {
      url: `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_genres=${id}`,
      headers: {
        'Authorization': `Bearer ${TMDB_API_TOKEN}`,
        'accept': 'application/json'
      }
    })
  return response.body
}

export { getCredits, getMovie, getMovies, getVideos, getRecommendations, getPerson, getMovieWithCast, searchMovies, getGenres, getGenreMovies }
