export default function MovieSummaryWrapper ({ html }) {
  return html`
    <style>
    :host > div {
        display: grid;
        grid-template-columns: 40%60%;
        max-width: 60rem;
        margin: 0 auto;
        margin-bottom: 3.5rem;
    }

    @media only screen and (max-width: 900px) {
      :host > div {
        display: block;
        grid-template-columns: unset;
        margin-bottom: 2.5rem;
      }
    }
    @media only screen and (max-width: 1300px) {
      :host > div {
        max-width: 55rem;
        margin-bottom: 2.5rem;
      }
    }
    @media only screen and (max-width: 1462.5px) {
      :host > div {
        max-width: 55rem;
        margin-bottom: 3rem;
      }
    }
    @media only screen and (max-width: 1500px) {
      :host > div {
        max-width: 52.5rem;
      }
    }
    </style>
    <div>
      <slot></slot>
    </div>
  `
}

