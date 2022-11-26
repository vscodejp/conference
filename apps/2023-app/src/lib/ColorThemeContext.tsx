import { createContext, useState, useEffect } from 'react'
import { FCWithChildren } from 'root/react-app-env'
import { DARK } from '@utils/feature'

const colorMode = ['light', 'dark'] as const
type ColorMode = typeof colorMode[number]
type ColorTheme = {
  colorMode: ColorMode
  changeColorMode: (cm: ColorMode) => void
}

const getColorMode = (): ColorMode => {
  if (typeof window !== 'undefined' && window.localStorage && DARK) {
    const storedPrefs = window.localStorage.getItem('color-mode')
    if (
      typeof storedPrefs === 'string' &&
      (colorMode as ReadonlyArray<string>).includes(storedPrefs)
    ) {
      return storedPrefs as ColorMode
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }
  return 'light'
}

export const ColorThemeContext = createContext<ColorTheme>(null)

export const ColorThemeProvider: FCWithChildren = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(getColorMode)
  const rawSetColorMode = (color: ColorMode) => {
    const root = window.document.documentElement
    const isDark = color === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(color)

    localStorage.setItem('color-theme', color)
  }

  useEffect(() => {
    rawSetColorMode(colorMode)
  }, [colorMode])
  return (
    <ColorThemeContext.Provider value={{ colorMode, changeColorMode: setColorMode }}>
      {children}
    </ColorThemeContext.Provider>
  )
}
