const $ = document.querySelector.bind(document)

const $title = $('.splash-title')
const $words = $('.splash-title > .words')

const computeOffset = (e, prop) => e[prop] + (e.offsetParent ? computeOffset(e.offsetParent, prop) : 0)

document.body.style.setProperty('--scale', window.innerHeight / $title.offsetHeight)
document.body.style.setProperty('--translateY', window.innerHeight / 2 - computeOffset($title, 'offsetTop') - $title.offsetHeight / 2)
document.body.style.setProperty('--translateX', $words.offsetWidth)

document.body.classList.remove('-no-js')
document.body.classList.add('-do-splash')
