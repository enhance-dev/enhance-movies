export default function MovieButton ({ html }) {
  return  html`
    <style>
      button {
        background: var(--light);
        color: var(--dark);
      }

      button:hover,
      button:focus {
        outline: 2px solid var(--movieButtonOutline, --pink-400);
        outline-offset: 2px;
      }
    </style>
    <button class="inline-flex align-items-center gap-4 pi0 pb-2 radius1 text-1 uppercase tracking1 font-medium">
      <slot></slot>
    </button>
  `
}
