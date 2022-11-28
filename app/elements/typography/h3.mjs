export default function Element ({ html }) {
  return html`
        <h3 class="text-1 font-bold mb-2 uppercase">
            <slot></slot>
        </h3>
      `
}
