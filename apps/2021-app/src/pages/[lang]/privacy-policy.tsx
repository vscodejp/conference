import { t } from 'i18next'
import { defaultLanguage, languages } from 'root/i18n.config'
import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'

import { Button } from '@conference/shared/ui'
import NavSection from '@components/NavSection'
import FooterSection from '@components/FooterSection'
import styles from '@static/Home.module.scss'
import { urlPrefix } from '@utils/endpoints.constants'

export default function Home({ terms }) {
  return (
    <div className={styles.container}>
      <NavSection />

      <main className={styles.main}>
        <h2 className={styles.title}>{t('privacy_policy')}</h2>

        <div className={styles.content}>
          <ReactMarkdown skipHtml={false}>{terms}</ReactMarkdown>
        </div>

        <Button path={urlPrefix} tooltip={t('back_to_top')}>
          {t('back_to_top')}
        </Button>
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
  const terms = fs.readFileSync(process.cwd() + '/libs/shared/docs/privacy-policy.md', 'utf8')
  return {
    props: {
      terms: terms,
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
