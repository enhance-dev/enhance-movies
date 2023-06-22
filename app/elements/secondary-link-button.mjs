export default function PrimaryLinkButton({ html, state }) {
  const { attrs } = state
  const { href } = attrs

  return html`
    <style>
      a {
        background: var(--grey-700);
        color: white;
      }

      a:hover,
      a:focus {
        outline: 2px solid var(--pink-600);
        outline-offset: 2px;
      }
    </style>
    <a class="inline-flex align-items-center gap-4 pi0 pb-2 radius1 text-1 uppercase tracking1 font-medium" href="${href}">
      <slot></slot>
    </a>
  `
}
