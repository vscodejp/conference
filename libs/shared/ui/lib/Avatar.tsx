import React from 'react'
import { link, linkInfo, wrapper } from './Avatar.styles'

export interface AvatarIconProps {
  url?: string
  alt: string
  src: string
}

export const AvatarIcon = ({ url, alt, src }: AvatarIconProps) => {
  return (
    <div className={wrapper}>
      <a href={url} className={link} target="_blank" rel="noreferrer">
        <img alt={alt} src={src} decoding="async" />
        <div className={linkInfo}>
          <div>{alt}</div>
        </div>
      </a>
    </div>
  )
}
