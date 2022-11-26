import { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { FC } from 'root/react-app-env'
import { useOnMounted } from '@conference/shared/hooks'
import { ColorThemeContext } from '@lib/ColorThemeContext'

export const ColorThemeSwitch: FC = () => {
  const colorTheme = useContext(ColorThemeContext)

  // https://github.com/tailwindlabs/headlessui/issues/470#issue-873819383
  const { mounted } = useOnMounted()

  return (
    <div
      className="transition duration-500 ease-in-out rounded-full p-2"
      aria-label="switch color theme"
      aria-describedby="Switch Color Theme"
    >
      {mounted && colorTheme.colorMode === 'dark' ? (
        <FaSun
          onClick={() =>
            colorTheme.changeColorMode(colorTheme.colorMode === 'dark' ? 'light' : 'dark')
          }
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() =>
            colorTheme.changeColorMode(colorTheme.colorMode === 'dark' ? 'light' : 'dark')
          }
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  )
}

export default ColorThemeSwitch
