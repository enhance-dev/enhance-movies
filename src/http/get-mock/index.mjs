import { readFileSync } from 'fs'

function readJson(filename) {
  const data = readFileSync(filename)
  return JSON.parse(data)
}

export async function handler (req) {
  const path = req.rawPath
  if (path === '/mock/genre/movie/list') {
    return readJson('./mocks/genres.json')
  } else if (path.startsWith('/mock/discover/movie')) {
    if (req.queryStringParameters.with_cast) {
      return readJson('./mocks/cast.json')
    } else {
      return readJson('./mocks/genre.json')
    }
  } else if (path.startsWith('/mock/person')) {
    return readJson('./mocks/person.json')
  } else if (path.startsWith('/mock/search')) {
    return readJson('./mocks/search.json')
  } else if (path.endsWith('credits')) {
    return readJson('./mocks/credits.json')
  } else if (path.endsWith('videos')) {
    return readJson('./mocks/videos.json')
  } else if (path.includes('recommendations')) {
    return readJson('./mocks/recommendations.json')
  } else if (path.startsWith('/mock/movie')) {
    if (req.queryStringParameters.page) {
      return readJson('./mocks/movies.json')
    } else {
      return readJson('./mocks/movie.json')
    }
  }
}
