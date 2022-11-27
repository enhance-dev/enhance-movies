export default function Element ({ html, state }) {
  return html`
<style>
  :host header {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    background-color: var(--secondary-100);
  }
  :host div {
    min-height: 64px;
    padding: 0 24px;
  }
</style>
<header class="fixed top0 right0 w-full z1">
  <div class="flex items-center justify-between">
    <div class="flex items-center">Hamburger</div>
    <div class="flex items-center">Everything Else</div>
  </div>
</header>`
}

