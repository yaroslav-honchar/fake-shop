const getScrollbarWidth = (): number => {
  return window.innerWidth - document.body.offsetWidth
}

const scrollbarLock = (): void => {
  const scrollbarWidth: number = getScrollbarWidth()

  document.documentElement.style.setProperty("--current-scrollbar-width", `${scrollbarWidth}px`)
  document.body.classList.add("body-lock")
}

const scrollbarUnlock = (): void => {
  document.documentElement.style.setProperty("--current-scrollbar-width", "0px")
  document.body.classList.remove("body-lock")
}

const scrollbarToggle = (): void => {
  const isLocked: boolean = document.body.classList.contains("body-lock")

  if (isLocked) {
    scrollbarUnlock()
  } else {
    scrollbarLock()
  }
}

export {
  getScrollbarWidth,
  scrollbarToggle,
  scrollbarLock,
  scrollbarUnlock
}