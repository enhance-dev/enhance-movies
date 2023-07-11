/* eslint-disable no-undef */
export default function enhancelite(tagName, opts) {

  class EnhanceElementLite extends HTMLElement {
    constructor() {
      super()
      this.render = opts.render
    }

    connectedCallback() {
      this.innerHTML = this.render({ html: this.html, state: this.state })
    }

    html(strings, ...values) {
      const collect = []
      for (let i = 0; i < strings.length - 1; i++) {
        collect.push(strings[i], values[i])
      }
      collect.push(strings[strings.length - 1])
      return collect.join('')
    }

    get state() {
      const attrs = this.attributes.length
        ? this.attrsToObject(this.attributes)
        : {}
      const store = this.api?.store || {}

      return {
        attrs,
        store
      }
    }

    attrsToObject(attrs = []) {
      const attrsObj = {}
      for (let d = attrs.length - 1; d >= 0; d--) {
        let attr = attrs[d]
        attrsObj[attr.nodeName] = attr.nodeValue
      }
      return attrsObj
    }
  }

  customElements.define(
    tagName,
    EnhanceElementLite
  )
}
