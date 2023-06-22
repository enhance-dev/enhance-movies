export default function MoviePagePadding ({ html }) {
  return html`
  <style>
    :host {
        display: block;
        padding-inline: var(--space-0);
    }
  </style>
  <slot></slot>
`
}
