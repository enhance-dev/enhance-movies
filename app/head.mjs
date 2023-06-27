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
        <meta name="description" content="A demo application built with Enhance, the HTML first framework. Powered by Begin and The Movies DB." />
        <title>Enhance Movies</title>
        <link rel="stylesheet" href="/_public/keyframes.css" />
        ${linkTag()}
        <link rel="icon" href="/_public/favicon.svg" />
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
