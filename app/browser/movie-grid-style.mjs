export default `<style>
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(18%, 140px), 1fr));
    grid-gap: var(--space-2) var(--space-0);
    justify-content: space-evenly;
    align-content: space-between;
    align-items: start;
    margin-block: var(--space-2);
    animation: 2s fadein var(--easeOutQuint), 1s raise var(--easeOutQuint);
    animation-delay: 0.25s;
    animation-fill-mode: both;
  }
</style>`
