import i18next from 'i18next'
import { defaultLanguage, languages } from 'root/i18n.config'

import { Button } from '@conference/shared/ui'
import NavSection from '@components/NavSection'
import FooterSection from '@components/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen p-0 m-0 flex flex-col justify-center items-center">
      <NavSection />

      <main className="p-0 m-0">
        <h2 className="m-0 leading-5 text-xl">{i18next.t('contact')}</h2>

        <div className="flex items-center justify-center flex-wrap max-w-5xl my-2">
          <Button
            path={
              'https://docs.google.com/forms/d/e/1FAIpQLSeDsAlBwncykjmyia0Z-7W-1IMIPHBGZisRZJT_KZ8J8y6rRQ/viewform'
            }
            tooltip={i18next.t('there_is_google_form')}
            isExternalLink
          >
            {i18next.t('there_is_google_form')}
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
