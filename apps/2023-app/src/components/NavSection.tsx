import { useEffect, useRef } from 'react'
import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import styles from '../static/Header.module.scss'
import { conferenceNameWithYear } from '@utils/constants'
import { DARK } from '@utils/feature'
import { urlPrefix } from '@utils/endpoints.constants'
import { ColorThemeSwitch } from './modules/ColorThemeSwitch'

const NavSection: FC = () => {
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
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img alt="" src={`${urlPrefix}/icons/vscodejp.svg`} className="w-12" />
          <span className="ml-3 text-md md:text-xl">{conferenceNameWithYear}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-900">
            {i18next.t('about')}
          </a>
          <a href="#staffs" className="mr-5 hover:text-gray-900">
            {i18next.t('staffs')}
          </a>
        </nav>
        {DARK && (
          <a
            href="#"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            aria-label="switch color theme"
            aria-describedby="Switch Color Theme"
          >
            <ColorThemeSwitch />
          </a>
        )}
      </div>
    </header>
  )
}

export default NavSection
