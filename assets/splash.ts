const $ = document.querySelector.bind(document)

const $title = $('.splash-title')
const $words = $('.splash-title > .words')

$title.style.setProperty('--scale', window.innerHeight / $title.offsetHeight)
$title.style.setProperty('--translateY', window.innerHeight / 2 - $title.offsetTop - $title.offsetHeight / 2)
// $title.style.setProperty('--width', $title.offsetWidth)
$title.style.setProperty('--translateX', $words.offsetWidth)

document.body.classList.add('-do-splash')
