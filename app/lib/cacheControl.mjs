export default function getCacheControl () {
  return process.env.ARC_ENV === 'production'
    // 1 hour
    ? 'max-age=3600'
    : 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
}
