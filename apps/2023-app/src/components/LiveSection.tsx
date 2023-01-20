import { Fragment } from 'react'
import { t } from 'i18next'
import { FC } from 'root/react-app-env'
import { Button } from '@conference/shared/ui'
import { TfiNewWindow } from 'react-icons/tfi'
import styles from '@static/Live.module.scss'

const LiveSection: FC = () => {
  return (
    <section id={'map'} className="w-10/12 mx-auto mr-auto flex flex-col gap-4">
      <Fragment>
        <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <a
            href="https://www.youtube.com/watch?v=UdFJaZdJvVw"
            className="inline-flex text-white dark:text-white bg-youtube border-0 py-4 px-16 focus:outline-none rounded text-2xl "
            aria-label={t('youtube_live')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('youtube_live')}
            <span className={styles.content}>
              <TfiNewWindow />
            </span>
          </a>
        </div>
      </Fragment>
    </section>
  )
}
export default LiveSection
