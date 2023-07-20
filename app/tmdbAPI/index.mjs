import tiny from 'tiny-json-http'
import { getMockCredits, getMockMovie, getMockMovies, getMockVideos, getMockRecommendations, getMockPerson, getMockMovieWithCast, searchMockMovies, getMockGenres, getMockGenreMovies } from './mock.mjs'

const TMDB_API_BASE_URL = 'https://api.themoviedb.org'
const TMDB_API_VERSION = '3'
const baseUrl = `${TMDB_API_BASE_URL}/${TMDB_API_VERSION}`

const {
  TMDB_API_TOKEN
} = process.env

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
  if (TMDB_API_TOKEN) {
    return getJSON(`/movie/${type}?page=${page}`)
  } else {
    return await getMockMovies()
  }
}

const getMovie = async function(id) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/movie/${id}?lang=en-US`)
  } else {
    return await getMockMovie()
  }
}

const getMovieWithCast = async function(id, page = '1', sort_by = 'popularity.desc') {
  if (TMDB_API_TOKEN) {
    return getJSON(`/discover/movie?with_cast=${id}&page=${page}&sort_by=${sort_by}`)
  } else {
    return await getMockMovieWithCast()
  }
}

const getCredits = async function(id) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/movie/${id}/credits`)
  } else {
    return await getMockCredits()
  }
}

const getVideos = async function(id) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/movie/${id}/videos`)
  } else {
    return await getMockVideos()
  }
}

const getRecommendations = async function(id, page) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/movie/${id}/recommendations?page=${page}`)
  } else {
    return await getMockRecommendations()
  }
}

const getPerson = async function(id) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/person/${id}`)
  } else {
    return await getMockPerson()
  }
}

const searchMovies = async function(q, page) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/search/movie?query=${q}&page=${page}`)
  } else {
    return await searchMockMovies()
  }
}

const getGenres = async function() {
  if (TMDB_API_TOKEN) {
    const response = await getJSON(`/genre/movie/list`)
    return response.genres
  } else {
    return await getMockGenres()
  }
}

const getGenreMovies = async function(id, page, sort_by) {
  if (TMDB_API_TOKEN) {
    return getJSON(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&with_genres=${id}`)
  } else {
    return await getMockGenreMovies()
  }
}

export { getCredits, getMovie, getMovies, getVideos, getRecommendations, getPerson, getMovieWithCast, searchMovies, getGenres, getGenreMovies }
