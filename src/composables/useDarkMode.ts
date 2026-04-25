import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

export function useDarkMode() {
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)

  return {
    isDark,
    toggleTheme: themeStore.toggleTheme,
    initTheme: themeStore.initTheme
  }
}
