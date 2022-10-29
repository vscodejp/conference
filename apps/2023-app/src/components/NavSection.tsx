import { useEffect, useRef, useState } from 'react'
import { FC } from 'root/react-app-env'
import { FaBars } from 'react-icons/fa'
import i18next from 'i18next'
import styles from '@static/Header.module.scss'
import { conferenceNameWithYear, simplyName } from '@utils/constants'
import { DARK } from '@utils/feature'
import { urlPrefix } from '@utils/endpoints.constants'
import { ColorThemeSwitch } from './modules/ColorThemeSwitch'

const NavSection: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement | any>()

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current?.classList.add(styles.navActive)
      } else {
        ref.current?.classList.remove(styles.navActive)
      }
    }
  }, [])

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop

    return window.pageYOffset > offset!
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 justify-between md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 dark:text-gray-300">
          <img alt="" src={`${urlPrefix}/icons/vscodejp.svg`} className="w-12" />
          <span className="ml-3 md:block hidden text-md md:text-xl">{conferenceNameWithYear}</span>
          <span className="ml-3 block md:hidden text-md md:text-xl">{simplyName}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="md:block hidden">
            <a href="#about" className="mr-5 hover:text-gray-900 dark:text-gray-400">
              {i18next.t('about')}
            </a>
            <a href="#staffs" className="mr-5 hover:text-gray-900 dark:text-gray-400">
              {i18next.t('staffs')}
            </a>
          </div>
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
          {DARK && <ColorThemeSwitch />}
        </nav>
        {isOpen && (
          <div className="md:hidden w-full block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="list-none p-0 m-0 flex justify-center items-center">
                <a href="#about" className="mr-5 hover:text-gray-900 dark:text-gray-400">
                  {i18next.t('about')}
                </a>
              </li>
              <li className="list-none p-0 m-0 flex justify-center items-center">
                <a href="#staffs" className="mr-5 hover:text-gray-900 dark:text-gray-400">
                  {i18next.t('staffs')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavSection
