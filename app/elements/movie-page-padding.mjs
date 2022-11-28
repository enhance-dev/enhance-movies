export default function Element ({ html }) {
  return html`
  <style>
    :host {
        display: block;
        padding-right: 1rem;
        padding-left: 1rem;
    }
    @media only screen and (min-width: 1300px) {
        :host {
            padding-right: 1.5rem;
            padding-left: 1.5rem;
        }
    }
    @media only screen and (min-width: 1462.5px) {
        :host {
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }
  </style>
  <slot></slot>
`
}

