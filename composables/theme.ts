import type { Theme } from '@/types'

export function useTheme() {
  const { globals } = useContent()
  
  const theme = computed<Theme>(() => globals.value.theme)

  return {
    theme
  }
}