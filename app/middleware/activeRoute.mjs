export async function getActiveRoute (req) {
  const { path, query } = req
  
  let activeRoute = ''

  // Discover: All (index)
  if (path === '/') {
    activeRoute = 'all'
  }

  // Popular, Top Rated, or Upcoming
  if (path.includes('discover')) {
    activeRoute = query.category
  }

  // The name of the genre
  if (path.includes('genre')) {
    activeRoute = query.name
  }

  req.activeRoute = activeRoute
}
