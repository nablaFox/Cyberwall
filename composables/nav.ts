export function useNav() {
  const isScreenOpen = ref(false)

  function openScreen() {
    isScreenOpen.value = true
    window.addEventListener('resize', closeScreenOnTabletWindow)
  }

  function closeScreen() {
    isScreenOpen.value = false
    window.removeEventListener('resize', closeScreenOnTabletWindow)
  }

  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen()
  }

  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen()
  }

  const route = useRoute()
  watch(() => route.path, closeScreen)

  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen,
  }
}