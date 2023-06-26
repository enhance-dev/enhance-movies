export default function MovieLayout ({ html }) {
  return html`
    <style>
    :host {
        min-height: 100vh;
        display: grid;
        grid-template-areas:
            'header'
            'main'
            'footer';
        grid-template-rows: auto min-content 1fr min-content;
    }
    ::slotted([slot='header']) {
       grid-area: header;
    }
    ::slotted([slot='left-sidebar']) {
        grid-area: left-sidebar;
        display: none;
    }
    ::slotted([slot='main']) {
        grid-area: main;
        min-width: 0; /* Avoid overflow issues w/ scrolling children */
    }
    ::slotted([slot='footer']) {
        grid-area: footer;
    }
    @media (min-width: 48em) {
        :host {
            grid-template:
            'header             header' min-content
            'left-sidebar       main  ' 1fr
            'footer             footer' min-content
            / minmax(auto, var(--layout-max-sidebar-width, 16rem))
            minmax(var(--layout-min-content-width, 16rem), 1fr);
        }
        ::slotted([slot='left-sidebar']) {
            display: block;
        }
    }
    </style>
    <slot name="header"></slot>
    <slot name="left-sidebar"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
`
}
