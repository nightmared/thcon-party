const $ = document.querySelector.bind(document)

const $title = $('.splash-title')
const $words = $('.splash-title > .words')
const $countdown = $('#countdown-value')

const computeOffset = (e, prop) => e[prop] + (e.offsetParent ? computeOffset(e.offsetParent, prop) : 0)

document.body.style.setProperty('--scale', window.innerHeight / $title.offsetHeight)
document.body.style.setProperty('--translateY', window.innerHeight / 2 - computeOffset($title, 'offsetTop') - $title.offsetHeight / 2)
document.body.style.setProperty('--translateX', $words.offsetWidth)

document.body.classList.add('-do-splash')

const update = () => {
  const diff = new Date('2021-06-11T11:00:00.000Z') - new Date()
  if (diff < 0) {
    $countdown.innerHTML = '0!!'
  } else {
    const str = (diff / (1000 * 60 * 60 * 24)).toFixed(7)
    $countdown.innerHTML = str
    requestAnimationFrame(update)
  }
}

update()
