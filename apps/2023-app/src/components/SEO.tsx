import { useRouter } from 'next/router'
import Head from 'next/head'
import i18next from 'i18next'
import { conferenceNameWithYear, description } from '@utils/constants'
import { urlPrefix } from '@utils/urlPath'

const SEO = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <>
      <Head>
        <title>{conferenceNameWithYear}</title>
        <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
        <link rel="manifest" href={`${urlPrefix}/manifest.json`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="description"
          content={pathname !== '/' ? i18next.t('og_description') : description}
        />
        <meta property="og:site_name" content={conferenceNameWithYear} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={pathname !== '/' ? i18next.t('og_description') : description}
        />
        <meta property="og:title" content={conferenceNameWithYear} />
        <meta property="og:url" content={conferenceNameWithYear} />
        <meta property="og:image" content={`${urlPrefix}/concept.png`} />
        <meta
          property="twitter:description"
          content={pathname !== '/' ? i18next.t('og_description') : description}
        />
        <meta property="twitter:title" content={conferenceNameWithYear} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@vscodejp" />
        <meta property="twitter:creator" content="@vscodejp" />
        <meta property="twitter:site" content="@vscodejp" />
        <meta property="og:image" content={`${urlPrefix}/concept.png`} key="twitter:title" />
      </Head>
    </>
  )
}

export default SEO
