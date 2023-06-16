export async function getReferer (req) {
  const { referer = '/' } = req.headers
  req.referer = referer
}
