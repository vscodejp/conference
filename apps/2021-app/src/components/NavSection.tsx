import { useEffect, useRef } from 'react'
import { FC } from 'root/react-app-env'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Header.module.scss'
import { conferenceName } from '@utils/constants'

import { ColorThemeSwitch } from './modules/ColorThemeSwitch'

const NavSection: FC = () => {
  const lang = i18next.language.substring(0, 2)

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
    <div ref={ref} className={styles.header}>
      <Link href={`/${lang}/`}>
        <a aria-label="link to title" aria-describedby="Title" className={styles.logo}>
          {conferenceName}
        </a>
      </Link>
      <div className={styles.links_wrapper}>
        <nav className={styles.links}>
          <Link href={`/${lang}/#about`}>
            <a
              aria-label="Link to AboutSection"
              aria-describedby={i18next.t('about')}
              className={styles.link}
            >
              {i18next.t('about')}
            </a>
          </Link>
          <Link href={`/${lang}/#timetable`}>
            <a
              aria-label="Link to TimetableSection"
              aria-describedby={i18next.t('timetable')}
              className={styles.link}
            >
              {i18next.t('timetable')}
            </a>
          </Link>
          <Link href={`/${lang}/#staffs`}>
            <a
              aria-label="Link to StaffSection"
              aria-describedby={i18next.t('staffs')}
              className={styles.link}
            >
              {i18next.t('staffs')}
            </a>
          </Link>
          <Link href={`/${lang}/#supporters`}>
            <a
              aria-label="link to Aupporters"
              aria-describedby="SupporterSection"
              className={styles.link}
            >
              {i18next.t('supporters')}
            </a>
          </Link>
          <a
            href="#"
            aria-label="switch color theme"
            aria-describedby="Switch Color Theme"
            className={styles.link}
          >
            <ColorThemeSwitch />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default NavSection
