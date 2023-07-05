/* globals document */
const triggers = document.querySelectorAll('movie-trailer-modal a')

triggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    // Prevent link firing so we can open the trailer's modal instead
    event.preventDefault()
    const movieID = trigger.parentElement.dataset.movie
    document.querySelector(`movie-dialog[data-movie='${movieID}'] dialog`).showModal()
  })
})

const dialogs = document.querySelectorAll('movie-trailer-modal dialog')

dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    // Close the dialog if a click event fires from the dialog (but not its children)
    if (event.target.tagName === 'DIALOG') dialog.close()
  })

  // Reset the iframe's src attribute to stop video playback when the dialog is closed
  dialog.addEventListener('close', event => {
    const iframe = event.target.querySelector('iframe')
    const src = iframe.getAttribute('src')
    iframe.setAttribute('src', src)
  })
})
