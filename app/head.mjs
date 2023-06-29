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
        <meta name="title" content="Enhance Movies" />
        <meta name="description" content="Enhance Movie is a non-trivial demo application built on top of the TMDB (The Movie Database) API." />
        <meta name="theme-color" content="#a0094a"/>
        <!-- Open Graph -->
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://local-fih.begin.app/' />
        <meta property='og:title' content='Enhance Movies' />
        <meta property='og:description' content='Enhance Movie is a non-trivial demo application built on top of the TMDB (The Movie Database) API.' />
        <!-- meta property='og:image' content='https://local-fih.begin.app/enhance-meta-image.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' / -->
        <!-- Twitter -->
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://local-fih.begin.app/' />
        <meta property='twitter:title' content='Enhance Movies' />
        <meta property='twitter:description' content='Enhance Movie is a non-trivial demo application built on top of the TMDB (The Movie Database) API.' />
        <!-- meta property='twitter:image' content='https://local-fih.begin.app/enhance-meta-image.jpg' /-->
        <title>Enhance Movies</title>
        <link rel="stylesheet" href="/_public/keyframes.css" />
        ${linkTag()}
        <link rel="icon" href="/_public/favicon.svg" />
        <link rel="manifest" href="/_public/app.webmanifest" />
        <link rel="apple-touch-icon" href="/_public/apple-touch-icon.png">
        <script async type="module" src="/_public/browser/sw.mjs"></script>
        <style>
          :root {
            color-scheme: dark;
          }

          body {
            background: var(--dark);
            color: var(--light);
            text-rendering: optimizeLegibility;
          }
        </style>
      </head>
      <body class='font-sans leading3'>
`
}
