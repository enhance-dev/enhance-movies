/* global document */
const prefetched = []
const links = document.querySelectorAll('a')

function addPrefetch(href) {
  const linkEl = document.createElement('link')
  linkEl.setAttribute('rel', 'prefetch')
  linkEl.setAttribute('href', href)
  document.head.appendChild(linkEl)
  return href
}

links.forEach(link => {
  // Initiate a timer ID
  let timer

  link.addEventListener('mouseover', e => {
    let href

    // If the hovered target isn't the link itself, get the href
    // from the target's closest link
    e.target.tagName.toLowerCase() === 'a'
      ? href = e.target.href
      : href = e.target.closest('a').href

    // Prefetch the href after hovering for 500ms
    timer = setTimeout(() => {
      // Only prefetch hrefs that haven't been prefetched yet
      if (!prefetched.includes(href)) {
        prefetched.push(addPrefetch(href))
      }
    }, 500)
  })

  // Cancel setting the prefetch if hover stops before 500ms
  link.addEventListener('mouseout', () => {
    clearTimeout(timer)
  })
})
