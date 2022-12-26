import React from 'react'
import i18next from 'i18next'
import { IconButton } from '@conference/shared/ui'
import styles from '@static/Social.module.scss'

export const SocialSection = () => {
  return (
    <>
      <div className={styles.social_wrapper}>
        <IconButton
          href="https://twitter.com/intent/tweet?hashtags=vscodejp_A"
          tooltip={i18next.t('tweet_at_vscodejp_a')}
          isExternalLink
          isTwitter
        >
          {'Tweet #vscodejp_A'}
        </IconButton>
        <IconButton
          href="https://twitter.com/i/spaces/1OdJrBagjMnJX"
          tooltip={i18next.t('join_ask_the_speaker_at_a')}
          isExternalLink
          isTwitter
          showSpaces
        >
          {'Ask the Speaker at A'}
        </IconButton>
      </div>
      <div className={styles.social_wrapper}>
        <IconButton
          href="https://twitter.com/intent/tweet?hashtags=vscodejp_B"
          tooltip={i18next.t('tweet_at_vscodejp_b')}
          isExternalLink
          isTwitter
        >
          {'Tweet #vscodejp_B'}
        </IconButton>
        <IconButton
          href="https://twitter.com/i/spaces/1DXxyDBqqLVJM"
          tooltip={i18next.t('join_ask_the_speaker_at_b')}
          isExternalLink
          isTwitter
          showSpaces
        >
          {'Ask the Speaker at B'}
        </IconButton>
      </div>
      <div
        className={styles.social_annotation}
        dangerouslySetInnerHTML={{ __html: i18next.t('annotation_of_ask_the_speaker') }}
      />
    </>
  )
}
