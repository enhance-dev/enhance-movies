import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head () {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="view-transition" content="same-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light">
        <meta name="description" content="Enhance Movie is a non-trivial demo application built on top of the TMDB (The Movie Database) API" />
        <title>Enhance Movie</title>
        <link rel="stylesheet" href="/_public/keyframes.css" />
        ${linkTag()}
        <link rel="icon" href="/_public/favicon.svg" />
        <style>
          body {
            background: var(--dark);
            color: var(--light);
          }
        </style>
      </head>
      <body class='font-sans leading3'>
`
}
