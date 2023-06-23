export async function getActiveRoute (req) {
  const { path, query } = req
  
  let activeRoute = ''

  if (path === '/') {
    activeRoute = 'all'
  }

  if (path.includes('discover')) {
    activeRoute = query.category
  }

  if (path.includes('genre')) {
    activeRoute = query.name
  }

  req.activeRoute = activeRoute
}
