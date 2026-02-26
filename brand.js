(() => {
  const updateScrolledState = () => {
    document.documentElement.dataset.pttScrolled = window.scrollY > 2 ? 'true' : 'false'
  }

  const init = () => {
    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true })
  } else {
    init()
  }
})()
