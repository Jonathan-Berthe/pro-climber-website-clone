import animateScrollTo from 'animated-scroll-to'

import { debounce } from 'lodash'

/* Options for animated-scroll-to plugin */
const defaultOptions = {
  // Indicated if scroll animation should be canceled on user action (scroll/keypress/touch)
  // if set to "false" user input will be disabled until scroll animation is complete
  cancelOnUserAction: false,

  // Animation easing function, with "easeOutCubic" as default
  easing: t => (--t) * t * t + 1,

  // DOM element that should be scrolled
  // Example: document.querySelector('#element-to-scroll'),
  elementToScroll: window,

  // Horizontal scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  horizontalOffset: 0,

  // Maximum duration of the scroll animation
  maxDuration: 3000,

  // Minimum duration of the scroll animation
  minDuration: 250,

  // Duration of the scroll per 1000px
  speed: 1200,

  // Vertical scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  verticalOffset: 0
}

const numberOfSections = document.querySelectorAll('.section').length
let currentPosition = 0 // current y-scroll position
let currentSectionId = 1 // current section
let isInScrollingAnimate = false

/* - Function that calculate the futur y-scroll position in response to listeners (scroll-listener or click-listener) and animate to this position with the plugin 'animated-scroll-to'
positionScroll => current y-scroll position when the handleScroll function is called by the scroll-listener
setCurrentSectionId => setting function for the state of the App component (state = current section)
newSectionId => if != -1, the handleScroll function is called by the click-listener of scroll indicators   */
const handleScroll = (positionScroll, setCurrentSectionId, newSectionId = -1) => {
  if (newSectionId === -1) {
    // if scroll downwards => next section
    if (positionScroll > currentPosition) {
      if (currentSectionId === numberOfSections) return
      currentSectionId = currentSectionId + 1
    } else { // if scroll upwards => previous section
      if (currentSectionId === 0) return
      currentSectionId = currentSectionId - 1
    }
  } else { // If we know the goal section thanks to the click listener
    currentSectionId = newSectionId
  }

  document.querySelectorAll('.nav-indicator-item').forEach((e) => e.classList.remove('active'))
  document.querySelector(`.nav-indicator-item${currentSectionId}`).classList.add('active')

  // Let's start the scroll anim to the section of currentSectionId
  isInScrollingAnimate = true

  const elem = document.querySelector(`.section-${currentSectionId}`)
  const widthOfTopNavBar = (window.innerWidth < 800) ? 113 : 0 // if (window.innerWidth < 800) => top offset of 113px
  const scrollToY = elem.offsetTop - widthOfTopNavBar
  animateScrollTo(scrollToY, defaultOptions)
    .then(hasScrolledToPosition => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
        currentPosition = scrollToY
        setCurrentSectionId(currentSectionId) // We update de state of the App component
        setTimeout(() => { isInScrollingAnimate = false }, 70) // trick to avoid a re-call of scroll-listener
      }
    })
}

export const scrollHandler = (setCurrentSectionId) => {
  document.addEventListener('scroll', debounce(() => {
    const isSmallScreen = (window.innerWidth <= 800)
    if (!isInScrollingAnimate && !isSmallScreen) {
      handleScroll(window.scrollY, setCurrentSectionId)
    } else if (!isInScrollingAnimate) {
      let count = 0
      const sectionsAll = document.querySelectorAll('.section')
      for (let i = 0; i < sectionsAll.length; i++) {
        if (window.scrollY >= count && window.scrollY < count + sectionsAll[i].clientHeight) {
          // The currentSectionId is (i+1)
          setCurrentSectionId(i + 1)
          break
        }
        count += sectionsAll[i].clientHeight
      }
    }
  }, 15, { leading: true, trailing: false }))

  // 'click' Listener for the indicators
  const navIndicatorsAll = document.querySelectorAll('.nav-indicator-item')
  navIndicatorsAll.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      // toggle "active" class
      navIndicatorsAll.forEach((e) => e.classList.remove('active'))
      elem.classList.add('active')

      const toSectionId = index + 1
      handleScroll(window.scrollY, setCurrentSectionId, toSectionId)
    })
  })
}
