import React from 'react'
import { TwitterIcon } from '../assets/Icon'
import { button, tweetButton } from './Button.styles'

export interface ButtonProps {
  path: string
  tooltip: string
  isExternalLink?: boolean
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const {
    path,
    tooltip,
    isExternalLink,
    children,
  } = props

  return (
    <a
      href={path}
      title={tooltip}
      {...isExternalLink && { target: '_blank', rel: 'noopener noreferrer' }}
      className={button}
      role="button"
    >
      {children}
    </a>
  )
}

interface TweetButtonProps {
  path: string
  tooltip: string
  isExternalLink?: boolean
  showSpaces?: boolean
}

export const TweetButton = (props: React.PropsWithChildren<TweetButtonProps>) => {
  const {
    path,
    tooltip,
    isExternalLink,
    showSpaces,
    children,
  } = props

  return (
    <a
      href={path}
      title={tooltip}
      {...isExternalLink && { target: '_blank', rel: 'noopener noreferrer' }}
      className={tweetButton}
      style={showSpaces ? { backgroundColor: '#8f5dfc' } : { backgroundColor: '#1da1f2' }}
      role="button"
    >
      {children}
      <div className="icon_wrapper">
        <TwitterIcon />
      </div>
    </a>
  )
}
