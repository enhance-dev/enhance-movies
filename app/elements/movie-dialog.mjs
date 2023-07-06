export default function MovieDialog({ html, state }) {
  const { attrs } = state
  const { aspect_ratio = '16 / 9' } = attrs

  return html`
    <style>
      dialog {
        background: transparent;
        padding: var(--space-0);
        inline-size: 85vw;
        max-block-size: 80vh;
        aspect-ratio: var(--aspect-ratio, ${aspect_ratio});
        margin-block: var(--margin-block, auto);
      }

      dialog[open] {
        animation: 0.5s fadein var(--easeOutQuint);
      }

      dialog::backdrop {
        background-color: var(--dialogBackground);
        backdrop-filter: blur(5px) contrast(0.5);
      }

      .close-button {
        background-color: var(--pink-600);
        color: var(--light);
        block-size: 2em;
        inline-size: 2em;
        box-shadow: 0 4px 12px hsla(0deg 0% 0% / 0.2);
      }

      form[method="dialog"] {
        inset-block-start: 0em;
      }

      .close-button:hover,
      .close-button:focus {
        outline: 2px solid var(--pink-600);
        outline-offset: 2px;
      }

      [slot="content"] {
        box-shadow: 0 2px 12px hsla(0deg 0% 0% / 0.25);
      }
    </style>
    <slot name="trigger"></slot>
    <dialog class="mi-auto overflow-visible">
      <slot name="content"></slot>
      <form method="dialog" class="text-end absolute inset-ie-0 z1">
        <button class="close-button radius-100 font-semibold">
          &times;
        </button>
      </form>
    </dialog>
  `
}
