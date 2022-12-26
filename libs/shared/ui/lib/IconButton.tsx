import React from 'react'
import { TwitterIcon } from '../assets/Icon'
import { tweetButton } from './IconButton.styles'

interface IconButtonProps {
  href: string
  tooltip: string
  isExternalLink?: boolean
  isTwitter?: boolean
  showSpaces?: boolean
}

export const IconButton = (props: React.PropsWithChildren<IconButtonProps>) => {
  const { href, tooltip, isExternalLink, isTwitter, showSpaces, children } = props

  return (
    <a
      href={href}
      title={tooltip}
      {...(isExternalLink && { target: '_blank', rel: 'noopener noreferrer' })}
      className={tweetButton}
      style={showSpaces ? { backgroundColor: '#8f5dfc' } : { backgroundColor: '#1da1f2' }}
      role="button"
    >
      {children}
      {isTwitter && (
        <div className="icon_wrapper">
          <TwitterIcon />
        </div>
      )}
    </a>
  )
}
