import AOS from 'aos'

export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined") {
    AOS.init({
      duration: 800
    })
  }
})
