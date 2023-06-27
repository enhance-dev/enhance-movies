export default function MovieTrailerModal({ html, state }) {
  const { attrs } = state
  const { id, embedded, trailer } = attrs

  return html`
    <style>
      :host {
        --aspect-ratio: 16 / 9;
      }

      dialog {
        background: transparent;
        padding: var(--space-0);
        inline-size: 85vw;
        max-block-size: 80vh;
        aspect-ratio: var(--aspect-ratio);
      }

      dialog[open] {
        animation: 0.5s fadein var(--easing);
      }

      dialog::backdrop {
        background-color: hsla(0deg 0% 10% / 0.5);
        backdrop-filter: blur(5px);
      }

      .close-button {
        background-color: var(--pink-600);
        block-size: 2em;
        inline-size: 2em;
        box-shadow: 0 4px 12px hsla(0deg 0% 0% / 0.2);
        translate: 0 -1em;
      }

      .close-button:hover,
      .close-button:focus {
        outline: 2px solid var(--pink-600);
        outline-offset: 2px;
      }

      iframe {
        aspect-ratio: var(--aspect-ratio);
      }
    </style>
    <secondary-link-button href="${trailer}" data-movie="${id}">
      Trailer
      <svg height="20" width="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <use xlink:href="#svg-play-button">
      </svg>
    </secondary-link-button>
    <dialog class="m-auto overflow-visible" data-movie="${id}">
      <form method="dialog" class="text-end absolute inset-ie-0 z1">
        <button class="close-button radius-100 font-semibold">
          &times;
        </button>
      </form>
      <iframe allowfullscreen allow="fullscreen; autoplay" src="${embedded}" loading="lazy" class="si-100 sb-100"></iframe>
    </dialog>
  `
}
