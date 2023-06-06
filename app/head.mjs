import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head () {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Enhance Movie is a non-trivial demo application built on top of the TMDB (The Movie Database) API">
      <title>Enhance Movie</title>
      ${linkTag()}
      <link rel="icon" href="/_public/favicon.svg">
    </head>
`
}
