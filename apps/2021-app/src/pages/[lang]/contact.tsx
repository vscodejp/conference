import { t } from 'i18next'
import { defaultLanguage, languages } from 'root/i18n.config'

import { Button } from '@conference/shared/ui'
import NavSection from '@components/NavSection'
import FooterSection from '@components/FooterSection'
import styles from '@static/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavSection />

      <main className={styles.main}>
        <h2 className={styles.title}>{t('contact')}</h2>

        <div className={styles.content}>
          <Button
            path={
              'https://docs.google.com/forms/d/e/1FAIpQLSeDsAlBwncykjmyia0Z-7W-1IMIPHBGZisRZJT_KZ8J8y6rRQ/viewform'
            }
            tooltip={t('there_is_google_form')}
            isExternalLink
          >
            {t('there_is_google_form')}
          </Button>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: languages.map((lang) => {
      return { params: { lang: lang } }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
