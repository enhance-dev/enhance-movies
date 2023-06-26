export default function MovieSummaryBasics ({ html }) {
  return html`
    <div class='leading4 mbe2'>
      <slot name="rating"></slot>
      <slot name="details"></slot>
    </div>
  `
}
