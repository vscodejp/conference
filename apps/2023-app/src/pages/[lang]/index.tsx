import { Fragment } from 'react'
import Head from 'next/head'

import SEO from '@components/SEO'
import NavSection from '@components/NavSection'
import ConceptSection from '@components/ConceptSection'
import SocialSection from '@components/SocialSection'
import AboutSection from '@components/AboutSection'
import PlayerSection from '@components/PlayerSection'
import TimetableSection from '@components/TimetableSection'
import StaffSection from '@components/StaffSection'
import SupporterSection from '@components/SupporterSection'
import FooterSection from '@components/FooterSection'

import { conferenceNameWithYear } from '@utils/constants'
import { defaultLanguage, languages } from 'root/i18n.config'
import { urlPrefix } from '@utils/urlPath'
import { PLAYER, SOCIAL, SUPPORTER, TIMETABLE } from '@utils/feature'

export default function Home() {
  return (
    <Fragment>
      <SEO />
      <Head>
        <title>{conferenceNameWithYear}</title>
        <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
      </Head>

      <NavSection />

      <div className="min-h-screen p-0 m-0 flex flex-col justify-center items-center">
        <main className="p-0 m-0">
          <ConceptSection />
          {SOCIAL && <SocialSection />}
          <AboutSection />
          {PLAYER && <PlayerSection.MainEventPlayer />}
          {TIMETABLE && <TimetableSection />}
          <StaffSection />
          {SUPPORTER && <SupporterSection />}
        </main>
      </div>

      <FooterSection />
    </Fragment>
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
