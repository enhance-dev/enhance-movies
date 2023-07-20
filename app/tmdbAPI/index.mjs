import tiny from 'tiny-json-http'

const {
  TMDB_API_TOKEN
} = process.env

const TMDB_API_BASE_URL = TMDB_API_TOKEN ? 'https://api.themoviedb.org' : 'http://localhost:3333/mock'
const TMDB_API_VERSION = '3'
const baseUrl = TMDB_API_TOKEN ? `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}` : `${TMDB_API_BASE_URL}`

console.log(baseUrl)

const getJSON = async function(url) {
  const response = await tiny.get({
    url: `${baseUrl}${url}`,
    headers: {
      'Authorization': `Bearer ${TMDB_API_TOKEN}`,
      'accept': 'application/json'
    }
  })
  return response.body
}

const getMovies = async function(type, page) {
  return getJSON(`/movie/${type}?page=${page}`)
}

const getMovie = async function(id) {
  return getJSON(`/movie/${id}?lang=en-US`)
}

const getMovieWithCast = async function(id, page = '1', sort_by = 'popularity.desc') {
  return getJSON(`/discover/movie?with_cast=${id}&page=${page}&sort_by=${sort_by}`)
}

const getCredits = async function(id) {
  return getJSON(`/movie/${id}/credits`)
}

const getVideos = async function(id) {
  return getJSON(`/movie/${id}/videos`)
}

const getRecommendations = async function(id, page) {
  return getJSON(`/movie/${id}/recommendations?page=${page}`)
}

const getPerson = async function(id) {
  return getJSON(`/person/${id}`)
}

const searchMovies = async function(q, page) {
  return getJSON(`/search/movie?query=${q}&page=${page}`)
}

const getGenres = async function() {
  const response = await getJSON(`/genre/movie/list`)
  return response.genres
}

const getGenreMovies = async function(id, page, sort_by) {
  return getJSON(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_genres=${id}`)
}

export { getCredits, getMovie, getMovies, getVideos, getRecommendations, getPerson, getMovieWithCast, searchMovies, getGenres, getGenreMovies }
