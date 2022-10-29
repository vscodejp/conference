import { useContext } from 'react'
import { FC } from 'root/react-app-env'
import { ColorThemeContext } from '@lib/ColorThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useHeadlessPatch } from '@components/hooks/useHeadlessPatch'
import Link from 'next/link'

export const ColorThemeSwitch: FC = () => {
  const colorTheme = useContext(ColorThemeContext)
  const { mounted } = useHeadlessPatch()
  return (
    <div
      className="transition duration-500 ease-in-out rounded-full p-2"
      aria-label="switch color theme"
      aria-describedby="Switch Color Theme"
    >
      {mounted && colorTheme.colorMode === 'dark' ? (
        <Link
          href="#"
          onClick={() =>
            colorTheme.changeColorMode(colorTheme.colorMode === 'dark' ? 'light' : 'dark')
          }
        >
          <FaSun className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer" />
        </Link>
      ) : (
        <Link
          href="#"
          onClick={() =>
            colorTheme.changeColorMode(colorTheme.colorMode === 'dark' ? 'light' : 'dark')
          }
        >
          <FaMoon className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer" />
        </Link>
      )}
    </div>
  )
}

export default ColorThemeSwitch
