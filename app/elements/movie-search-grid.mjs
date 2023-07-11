export default function MovieSearchGrid({ html }) {
  // This element needs to contain no whitespace when empty, hence the line grouping and lack of newlines here
  return html`<style>
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: var(--space-2) var(--space-0);
        margin-block: var(--space-2);
      }
    </style><slot></slot>`
}
