import React from 'react'
import { discriptionInfo, link, linkInfo,linkInfoItem, wrapper } from './Avatar.styles'

export interface AvatarIconProps {
  url?: string
  alt: string
  src: string
  description?: string
}

export const AvatarIcon = ({ url, alt, src, description }: AvatarIconProps) => {
  return (
    <div className={wrapper}>
      <a href={url} className={link} target="_blank" rel="noreferrer">
        <img alt={alt} src={src} decoding="async" />
        <div className={linkInfo}>
          <div className={linkInfoItem}>
            {alt}
            {description ? (
              <p dangerouslySetInnerHTML={{ __html: description }} className={discriptionInfo}></p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  )
}
