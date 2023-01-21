import { FC } from 'root/react-app-env'
import { t } from 'i18next'

import styles from '@static/Section.module.scss'

const MainEventPlayer: FC = () => {
  return (
    <section id={'player'} className="w-full mx-auto flex flex-col gap-4">
      <h2 className="text-light w-full text-center text-lg py-2 rounded-lg">
        {t('subscribing_to_the_youtube_channel')}
      </h2>
      <div className={styles.container}>
        <iframe
          src={'https://www.youtube.com/embed/UdFJaZdJvVw?autoplay=1&mute=1'}
          className={styles.player}
          title={'VS Code Meetup YouTube channel'}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default { MainEventPlayer }
