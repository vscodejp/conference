import i18next from 'i18next'
import styles from '../../static/Home.module.scss'

import { Button } from '@conference/shared/ui'
import Header from '@components/Header'
import { PreEventPlayer } from '@components/Player'
import Footer from '@components/Footer'
import { urlPrefix } from '@utils/urlPath'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <PreEventPlayer />
      </main>

      <Button path={urlPrefix} tooltip={i18next.t('back_to_top')}>
        {i18next.t('back_to_top')}
      </Button>

      <Footer />
    </div>
  )
}
