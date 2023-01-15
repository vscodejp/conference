import { Fragment } from 'react'
import { FC } from 'root/react-app-env'
import { t } from 'i18next'
import { IconButton } from '@conference/shared/ui'

const SocialSection: FC = () => {
  return (
    <Fragment>
      <div className="py-1.5 flex items-center justify-center">
        <IconButton
          href="https://twitter.com/intent/tweet?hashtags=vscodejp_A"
          tooltip={t('tweet_at_vscodejp_a')}
          isExternalLink
          isTwitter
        >
          {'Tweet #vscodejp_A'}
        </IconButton>
        <IconButton
          href="https://twitter.com/i/spaces/1OdJrBagjMnJX"
          tooltip={t('join_ask_the_speaker_at_a')}
          isExternalLink
          isTwitter
          showSpaces
        >
          {'Ask the Speaker at A'}
        </IconButton>
      </div>
      <div className="py-1.5 flex items-center justify-center">
        <IconButton
          href="https://twitter.com/intent/tweet?hashtags=vscodejp_B"
          tooltip={t('tweet_at_vscodejp_b')}
          isExternalLink
          isTwitter
        >
          {'Tweet #vscodejp_B'}
        </IconButton>
        <IconButton
          href="https://twitter.com/i/spaces/1DXxyDBqqLVJM"
          tooltip={t('join_ask_the_speaker_at_b')}
          isExternalLink
          isTwitter
          showSpaces
        >
          {'Ask the Speaker at B'}
        </IconButton>
      </div>
      <div
        className="w-full text-center text-lg py-1.5 rounded-lg"
        dangerouslySetInnerHTML={{ __html: t('annotation_of_ask_the_speaker') }}
      />
    </Fragment>
  )
}

export default SocialSection
