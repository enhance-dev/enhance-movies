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
        <meta name="description" content="A demo application built with Enhance, the HTML first framework. Powered by Begin and The Movies DB." />
        <meta name="theme-color" content="#a0094a"/>
        <!-- Open Graph -->
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://local-fih.begin.app/' />
        <meta property='og:title' content='Enhance Movies' />
        <meta property='og:description' content='A demo application built with Enhance, the HTML first framework. Powered by Begin and The Movies DB.' />
        <!-- meta property='og:image' content='https://local-fih.begin.app/enhance-meta-image.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' / -->
        <!-- Twitter -->
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://local-fih.begin.app/' />
        <meta property='twitter:title' content='Enhance Movies' />
        <meta property='twitter:description' content='A demo application built with Enhance, the HTML first framework. Powered by Begin and The Movies DB.' />
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
            --background: var(--light);
            --color: var(--dark);
            --dialogBackground: var(--dialogBackgroundLight);
            --featureBackdropOpacity: var(--featureBackdropOpacityLight);
            --movieBackdropFilter: var(--movieBackdropFilterLight);
            color-scheme: dark light;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --background: var(--dark);
              --color: var(--light);
              --dialogBackground: var(--dialogBackgroundDark);
              --featureBackdropOpacity: var(--featureBackdropOpacityDark);
              --movieBackdropFilter: var(--movieBackdropFilterDark);
            }
          }

          body {
            background: var(--background);
            color: var(--color);
            text-rendering: optimizeLegibility;
            transition: background 1s var(--easeOutQuint), color 1s var(--easeOutQuint);
          }
        </style>
        <meta name="google-site-verification" content="DK6pVRILPsc5BRqfD0WgjNfxb9RiE29X_KhcYPtopnk" />
      </head>
      <body class='font-sans leading3 overflow-x-hidden'>
`
}
