const $ = document.querySelector.bind(document)

const $title = $('.splash-title')
const $words = $('.splash-title > .words')
const $countdown = $('#countdown-value');

(() => {
  const computeOffset = (e, prop) => e[prop] + (e.offsetParent ? computeOffset(e.offsetParent, prop) : 0)

  document.body.style.setProperty('--splash-scale', window.innerHeight / $title.offsetHeight)
  document.body.style.setProperty('--splash-translateY', window.innerHeight / 2 - computeOffset($title, 'offsetTop') - $title.offsetHeight / 2)
  document.body.style.setProperty('--splash-translateX', $words.offsetWidth)

  if (window.scrollY <= 1 && window.location.hash.length === 0) {
    document.body.classList.add('-do-splash')
  }
})();

(() => {
  const scrollHandler = () => {
    requestAnimationFrame(() =>
      document.body.style.setProperty(
        '--scroll',
        (window.scrollY / window.innerHeight).toString()
      ), 0
    )
  }
  scrollHandler()
  window.addEventListener('scroll', e => scrollHandler(), { passive: true })
})();

(() => {
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
})();

(() => {
  const delays = {
    newline: 100,
    interrupt: 1000,
    typed: 50
  }

  const $console = $('#splash-console > pre > code')
  $('#flag').innerHTML = atob('VEhDb24yMXt1bmRlci15b3VyLW5vc2V9').replace(/./g, '*')
  const consoleText: [{type: string, value?: string}] = [...$console.childNodes].map($node => {
    if ($node instanceof Text) {
      return { type: 'raw', value: $node.wholeText }
    } else if ($node.tagName === 'I') {
      return { type: 'interrupt' }
    } else if ($node.tagName === 'S') {
      return { type: 'typed', value: $node.innerText }
    } else if ($node.tagName === 'BR') {
      return { type: 'newline' }
    }
    throw new Error('Unknown tag: ' + $node.tagName)
  })
  const addCode = (file, src) => {
    consoleText.push(
      { type: 'raw', value: 'root@thcon.party:~$ ' },
      { type: 'interrupt' },
      { type: 'interrupt' },
      { type: 'typed', value: 'cat ' + file },
      { type: 'newline' },
      { type: 'interrupt' }
    )
    src.replace(/(.{80})/g, '$1\n').split('\n').forEach(line => {
      consoleText.push({ type: 'raw', value: line }, { type: 'newline' })
    })
    consoleText.push({ type: 'newline' }, { type: 'interrupt' })
  }
  const animationEnd = () => {
    addCode('flag.txt', 'There\'s a flag here?!')
    consoleText.push(
      { type: 'raw', value: 'root@thcon.party:~$ ' },
      { type: 'interrupt' },
      { type: 'interrupt' },
      { type: 'typed', value: 'Interested in the CTF? Keep reading this page ;)' },
      { type: 'interrupt' },
      { type: 'raw', value: '^C' },
      { type: 'newline' },
      { type: 'newline' },
      { type: 'raw', value: 'root@thcon.party:~$ ' }
    )
  }

  addCode('index.html', document.documentElement.innerHTML)

  Promise.all([
    fetch(document.currentScript.src).then(res => res.text()).then(src => {
      addCode('splash.js', src)
      return Promise.resolve()
    }),

    fetch($('link[rel=stylesheet]').href).then(res => res.text()).then(src => {
      addCode('design.css', src)
      return Promise.resolve()
    })

  ]).then(() => { animationEnd() }).catch(_ => { animationEnd() })

  $console.innerHTML = ''
  const write = (s: string) => { $console.innerText += s }

  const update = () => {
    if (consoleText.length === 0) {
      return
    }
    const top = consoleText[0]

    if (top.type === 'raw') {
      write(top.value)
      consoleText.shift()
      update()
    } else if (top.type === 'interrupt' || top.type === 'newline') {
      if (top.type === 'newline') {
        write('\n')
      }
      consoleText.shift()
      setTimeout(update, delays[top.type])
    } else if (top.type === 'typed') {
      if (top.value === '') {
        consoleText.shift()
        update()
        return
      }
      write(top.value[0])
      top.value = top.value.substring(1)
      setTimeout(update, delays.typed)
    }
  }
  update()
})()
