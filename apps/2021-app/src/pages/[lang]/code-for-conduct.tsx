import i18next from 'i18next'
import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'
import styles from '../../static/Home.module.scss'

import { Button } from '@conference/shared/ui'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { defaultLanguage, languages } from 'root/i18n.config'
import { urlPrefix } from '@utils/urlPath'

export default function Home({ terms }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{i18next.t('code_of_conduct')}</h1>

        <div className={styles.content}>
          <ReactMarkdown skipHtml={false}>{terms}</ReactMarkdown>
        </div>

        <Button path={urlPrefix} tooltip={i18next.t('back_to_top')}>
          {i18next.t('back_to_top')}
        </Button>
      </main>

      <Footer />
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
  const terms = fs.readFileSync(process.cwd() + '/libs/shared/docs/code-for-conduct.md', 'utf8')
  return {
    props: {
      terms: terms,
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
