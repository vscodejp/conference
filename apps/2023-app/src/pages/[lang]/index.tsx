import { Fragment } from 'react'
import Head from 'next/head'

import SEO from '@components/SEO'
import NavSection from '@components/NavSection'
import ConceptSection from '@components/ConceptSection'
import SocialSection from '@components/SocialSection'
import AboutSection from '@components/AboutSection'
import MapSection from '@components/MapSection'
import PlayerSection from '@components/PlayerSection'
import TimetableSection from '@components/TimetableSection'
import StaffSection from '@components/StaffSection'
import SupporterSection from '@components/SupporterSection'
import FooterSection from '@components/FooterSection'

import { INewtSession, INewtSpeaker, INewtSupporter } from '@conference/shared/types'
import { fetchCMS } from '@lib/NewtClient'
import { conferenceNameWithYear } from '@utils/constants'
import { defaultLanguage, languages } from 'root/i18n.config'
import { urlPrefix } from '@utils/endpoints.constants'
import { PLAYER, SOCIAL, SUPPORTER, TIMETABLE } from '@utils/feature'

export default function Home({ sessions, sessionTotal, supporters, supporterTotal }) {
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
          <MapSection />
          {TIMETABLE && sessionTotal !== 0 && <TimetableSection sessions={sessions} />}
          <StaffSection />
          {SUPPORTER && supporterTotal != 0 && <SupporterSection supporters={supporters} />}
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
  const { data: sessions, total: sessionTotal } = await fetchCMS<INewtSession>('session')
  const { data: speakers, total: speakerTotal } = await fetchCMS<INewtSpeaker>('speaker')
  const { data: supporters, total: supporterTotal } = await fetchCMS<INewtSupporter>('supporter')
  return {
    props: {
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
      sessions: sessions.sort((a, b) => {
        if (a.started_at < b.started_at) return -1
        if (a.started_at > b.started_at) return 1
        return 0
      }),
      sessionTotal,
      supporters,
      supporterTotal,
      // スピーカーは不使用
      speakers,
      speakerTotal,
    },
  }
}
