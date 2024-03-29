export default function StarRating ({ html, state }) {
  const { attrs } = state
  const { inset } = attrs

  return html`
    <style>
      :host {
        display: block;
        position: relative;
      }
    </style>
    <svg
      width="84"
      height="17"
      viewBox="0 0 84 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlink:href="#svg-stars">
    </svg>

    <svg
      width="84"
      height="17"
      viewBox="0 0 84 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute inset-0"
      clip-path="inset(0 ${inset}% 0 0)"
    >
     <use xlink:href="#svg-filled-stars">
    </svg>
  `
}
