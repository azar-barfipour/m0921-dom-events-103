function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
  //initial states and selectors
  const avatar = document.querySelector('#avatar')
  const coin = document.querySelector('#coin')

  // console.log(avatar.style.top);
  // console.log(parseInt(getComputedStyle(avatar).top));

  let score = 0

  //audio instance
  const coinAudio = new Audio('./assets/audio/smw_coin.wav')

  //audio config
  coinAudio.loop = false

  //score node
  const scoreHeader = document.createElement('h1')
  scoreHeader.innerHTML = `Score: ${score}`
  document.body.appendChild(scoreHeader)

  const maxWidth = window.innerWidth
  const maxHeight = window.innerHeight

  const coinOffset =  coin.width

  moveCoin(coin, maxWidth, maxHeight, coinOffset)

  window.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp' || e.key === 'Up'){
      moveVertical(avatar, -50, maxHeight)
    }
    if(e.key === 'ArrowDown' || e.key === 'Down'){
      moveVertical(avatar, 50, maxHeight)
    }
    if(e.key === 'ArrowLeft' || e.key === 'Left'){
      moveHorizontal(avatar, -50, maxWidth)
      avatar.style.transform = 'scaleX(-1)'
    }
    if(e.key === 'ArrowRight' || e.key === 'Right'){
      moveHorizontal(avatar, 50, maxWidth)
      avatar.style.transform = 'scaleX(1)'
    }

    if(isTouching(avatar, coin)){
      moveCoin(coin, maxWidth, maxHeight, coinOffset)
      coinAudio.play()
      score++
      scoreHeader.innerHTML = `Score: ${score}`
    }
  })

}

const moveVertical = (el, step, winHeight) => {
  const currTop = parseInt(el.style.top) || 100
  if(currTop + step < winHeight - el.width && currTop + step >= 0){
    el.style.top = `${currTop + step}px`
  }
}
const moveHorizontal = (el, step, winWidth) => {
  const currLeft = parseInt(el.style.left) || 100
  if(currLeft + step < winWidth - el.width && currLeft + step >= 0){
    el.style.left = `${currLeft + step}px`
  }
}


const moveCoin = (coin, maxWidth, maxHeight, coinOffset) => {
  const x = Math.floor(Math.random() * (maxWidth - coinOffset))
  const y = Math.floor(Math.random() * (maxHeight - coinOffset))

  coin.style.top = `${y}px`
  coin.style.left = `${x}px`
}

window.onload = function(){
  init()
}