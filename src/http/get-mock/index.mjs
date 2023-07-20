import { getMockCredits, getMockMovie, getMockMovies, getMockVideos, getMockRecommendations, getMockPerson, getMockMovieWithCast, searchMockMovies, getMockGenres, getMockGenreMovies } from './mock.mjs'

export async function handler (req) {
  const path = req.rawPath
  if (path === '/mock/genre/movie/list') {
    return getMockGenres()
  } else if (path.startsWith('/mock/discover/movie')) {
    if (req.queryStringParameters.with_cast) {
      return getMockMovieWithCast()
    } else {
      return getMockGenreMovies()
    }
  } else if (path.startsWith('/mock/person')) {
    return getMockPerson()
  } else if (path.startsWith('/mock/search')) {
    return searchMockMovies()
  } else if (path.endsWith('credits')) {
    return getMockCredits()
  } else if (path.endsWith('videos')) {
    return getMockVideos()
  } else if (path.includes('recommendations')) {
    return getMockRecommendations()
  } else if (path.startsWith('/mock/movie')) {
    if (req.queryStringParameters.page) {
      return getMockMovies()
    } else {
      return getMockMovie()
    }
  }
}
