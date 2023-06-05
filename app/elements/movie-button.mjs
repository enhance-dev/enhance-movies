export default function Element ({ html, state }) {
  const { attrs } = state
  const { href, label } = attrs
  return html`
  <style>
    :host button {
        padding: 6px 16px;
        min-width: 96px;
        min-height: 48px;
        color: var(--palette-primary-main);
        border: 1px solid black;
        border-radius: 4px;
        box-shadow: none;
        -webkit-transition-property: background-color,box-shadow,border,-webkit-transform;
        -moz-transition-timing-function: background-color,box-shadow,border,-moz-transform;
        -o-transition-timing-function: background-color,box-shadow,border,-o-transform;
        transition-property: background-color,box-shadow,border,-webkit-transform;
        transition-property: background-color,box-shadow,border,-moz-transform;
        transition-property: background-color,box-shadow,border,-o-transform;
        transition-property: background-color,box-shadow,border,transform;
        -webkit-transition-duration: 250ms,250ms,250ms,250ms;
        -moz-transition-duration: 250ms,250ms,250ms,250ms;
        -o-transition-duration: 250ms,250ms,250ms,250ms;
        transition-duration: 250ms,250ms,250ms,250ms;
        -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1);
        -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1);
        -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1),cubic-bezier(0.4, 0, 0.2, 1);
    }
  </style>
  <a href="${href}" target="_blank" rel="noopener noreferrer">
    <button class="relative inline-flex align-items-center justify-content-center outline-none select-none font-medium text-1 background-transparent">
        <span class="si-100 flex align-items-center justify-content-center">
            ${label}
            <span style="margin-left: 8px; display: inherit;">
                <slot name="icon"></slot>
            </span>
        </span>
    </button>
  </a>
`
}

