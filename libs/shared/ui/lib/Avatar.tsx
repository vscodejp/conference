import React from 'react'
import * as styles from './Avatar.styles'

export interface AvatarIconProps {
  url?: string
  alt: string
  src: string
  description?: string
}

export const AvatarIcon = ({ url, alt, src, description }: AvatarIconProps) => {
  return (
    <div className={styles.wrapper}>
      <a href={url} className={styles.link} target="_blank" rel="noreferrer">
        <img alt={alt} src={src} decoding="async" />
        <div className={styles.linkInfo}>
          <div className={styles.linkInfoItem}>
            {alt}
            {description ? (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className={styles.description}
              ></p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  )
}
