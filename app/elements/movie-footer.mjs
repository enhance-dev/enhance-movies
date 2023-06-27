export default function MovieFooter ({ html }) {
  return html`
    <style>
      img {
        width: 2rem;
        aspect-ratio: 136 / 124;
        inset-block-start: -0.125rem;
      }

      a {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 1px;
      }

      dl {
        grid-template-columns: 1fr 1fr;
        gap: 0 1em;
      }

    </style>
    <footer class='pb4 pi0 mbe4 leading3'>
      <h1 class='text2 text-center font-semibold flex justify-content-center align-items-center gap-2 mbe4'>
        <img src='/_public/favicon.svg' alt='' class='relative' />
        Enhance Movies
      </h1>

      <h2 class='text-1 text-center font-medium uppercase tracking2 mbe0'>Cast</h2>

      <dl class='grid align-items-baseline mbe4'>
        <dt class='text-1 uppercase tracking2 text-end'>Framework</dt>
        <dd><a href='https://enhance.dev'>Enhance</a></dd>

        <dt class='text-1 uppercase tracking2 text-end'>Deployment</dt>
        <dd><a href='https://begin.com'>Begin</a></dd>

        <dt class='text-1 uppercase tracking2 text-end'>Data</dt>
        <dd><a href='https://themoviedb.org'>The Movie DB</a></dd>
      </dl>

      <h2 class='text-1 text-center font-medium uppercase tracking2 mbe0'>Crew</h2>

      <dl class='grid align-items-baseline mbe4'>
        <dt class='text-1 uppercase tracking2 text-end'>Writer</dt>
        <dd>HTML</dd>

        <dt class='text-1 uppercase tracking2 text-end'>Art director</dt>
        <dd>CSS</dd>

        <dt class='text-1 uppercase tracking2 text-end'>Stunt coordinator</dt>
        <dd>JavaScript</dd>
      </dl>

      <p class='text-center'>
        Original screenplay available on <a href='https://github.com/enhance-dev/enhance-movies'>GitHub</a>
      </p>
    </footer>
  `
}
